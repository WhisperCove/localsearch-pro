mod commands;
mod core;
mod db;

use std::sync::Arc;
use tauri::Manager;
use tracing_subscriber::{fmt, EnvFilter};

use db::Database;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // Initialize logging - write to file for debugging
    fmt()
        .with_env_filter(
            EnvFilter::from_default_env()
                .add_directive("deepsearch=info".parse().unwrap()),
        )
        .init();

    tracing::info!("=== DeepSearch Starting ===");
    tracing::info!("OS: {}", std::env::consts::OS);
    tracing::info!("Arch: {}", std::env::consts::ARCH);

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .setup(|app| {
            tracing::info!("Setup starting...");

            // Get app data directory with multiple fallbacks
            let app_dir = match app.path().app_data_dir() {
                Ok(dir) => {
                    tracing::info!("App data dir: {:?}", dir);
                    dir
                }
                Err(e) => {
                    tracing::error!("Failed to get app_data_dir: {}", e);
                    let fallback = std::env::temp_dir().join("DeepSearch");
                    tracing::info!("Using temp fallback: {:?}", fallback);
                    fallback
                }
            };

            // Create directory
            match std::fs::create_dir_all(&app_dir) {
                Ok(_) => tracing::info!("App dir created/exists: {:?}", app_dir),
                Err(e) => {
                    tracing::error!("Failed to create app dir: {}", e);
                    // Try temp directory
                    let temp_dir = std::env::temp_dir().join("DeepSearch");
                    let _ = std::fs::create_dir_all(&temp_dir);
                    tracing::info!("Using temp dir: {:?}", temp_dir);
                }
            }

            let db_path = app_dir.join("deepsearch.db");
            tracing::info!("Database path: {:?}", db_path);

            // Open database with error recovery
            let db = match Database::open(&db_path) {
                Ok(db) => {
                    tracing::info!("Database opened successfully");
                    db
                }
                Err(e) => {
                    tracing::error!("Failed to open database at {:?}: {}", db_path, e);
                    // Try temp directory
                    let temp_db = std::env::temp_dir().join("DeepSearch").join("deepsearch.db");
                    let _ = std::fs::create_dir_all(temp_db.parent().unwrap());
                    match Database::open(&temp_db) {
                        Ok(db) => {
                            tracing::info!("Database opened in temp dir: {:?}", temp_db);
                            db
                        }
                        Err(e2) => {
                            tracing::error!("Failed to open database in temp dir: {}", e2);
                            panic!("Cannot open database: {}", e2);
                        }
                    }
                }
            };

            let db = Arc::new(db);
            app.manage(db.clone());
            tracing::info!("Database managed");

            // Auto-index on startup
            let db_clone = db.clone();
            std::thread::spawn(move || {
                tracing::info!("Index thread started");
                std::thread::sleep(std::time::Duration::from_secs(2));

                let dirs = core::index_manager::get_all_scan_dirs();
                tracing::info!("Found {} directories to scan", dirs.len());

                if dirs.is_empty() {
                    tracing::warn!("No directories found! Trying fallback...");
                    // Try common paths manually
                    let mut fallback_dirs = Vec::new();
                    if let Ok(userprofile) = std::env::var("USERPROFILE") {
                        let home = std::path::PathBuf::from(&userprofile);
                        for name in &["Desktop", "Documents", "Downloads", "桌面", "文档", "下载"] {
                            let path = home.join(name);
                            if path.exists() {
                                fallback_dirs.push(path);
                            }
                        }
                    }
                    tracing::info!("Fallback dirs: {:?}", fallback_dirs);
                    if !fallback_dirs.is_empty() {
                        match core::index_manager::index_directory(&db_clone, &fallback_dirs) {
                            Ok(p) => tracing::info!("Fallback indexed: {}", p.indexed),
                            Err(e) => tracing::error!("Fallback indexing failed: {}", e),
                        }
                    }
                    return;
                }

                for dir in &dirs {
                    tracing::info!("Will scan: {:?}", dir);
                }

                match core::index_manager::index_directory(&db_clone, &dirs) {
                    Ok(progress) => {
                        tracing::info!(
                            "Indexing complete: {} indexed, {} skipped, {} total",
                            progress.indexed,
                            progress.skipped,
                            progress.total
                        );
                    }
                    Err(e) => {
                        tracing::error!("Indexing failed: {}", e);
                    }
                }
            });

            tracing::info!("Setup complete");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            commands::search::search_query,
            commands::index::index_create,
            commands::index::index_rebuild,
            commands::index::index_status,
            commands::preview::preview_file,
            commands::config::open_file,
            commands::config::open_folder,
            commands::config::copy_path,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
