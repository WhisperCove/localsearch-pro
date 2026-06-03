use rusqlite::params;
use serde::Serialize;
use std::sync::Arc;

use crate::db::Database;

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchResult {
    pub id: String,
    pub name: String,
    pub path: String,
    pub ext: String,
    pub size: i64,
    pub modified_at: i64,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchResponse {
    pub results: Vec<SearchResult>,
    pub total: usize,
    pub has_more: bool,
}

#[tauri::command]
pub async fn search_query(
    query: String,
    db: tauri::State<'_, Arc<Database>>,
) -> Result<SearchResponse, String> {
    tracing::info!("[SEARCH] Query: '{}'", query);

    if query.trim().is_empty() {
        return Ok(SearchResponse {
            results: vec![],
            total: 0,
            has_more: false,
        });
    }

    let conn = db.conn.lock().map_err(|e| e.to_string())?;

    let total_files: i64 = conn
        .query_row("SELECT COUNT(*) FROM files", [], |row| row.get(0))
        .unwrap_or(0);

    if total_files == 0 {
        return Ok(SearchResponse {
            results: vec![],
            total: 0,
            has_more: false,
        });
    }

    let like_pattern = format!("%{}%", query);

    // Count total matches
    let total: i64 = conn
        .query_row(
            "SELECT COUNT(*) FROM files WHERE name LIKE ?1 OR path LIKE ?1",
            params![like_pattern],
            |row| row.get(0),
        )
        .unwrap_or(0);

    // Get results with smart sorting:
    // 1. Name matches first
    // 2. Normal files before special symbol files ($xxx, .xxx)
    // 3. Alphabetical
    let mut stmt = conn
        .prepare(
            "SELECT id, path, name, ext, size, modified_at
             FROM files
             WHERE name LIKE ?1 OR path LIKE ?1
             ORDER BY 
               CASE WHEN name LIKE ?1 THEN 0 ELSE 1 END,
               CASE WHEN SUBSTR(name, 1, 1) = '$' OR SUBSTR(name, 1, 1) = '.' THEN 1 ELSE 0 END,
               name
             LIMIT 500",
        )
        .map_err(|e| e.to_string())?;

    let results: Vec<SearchResult> = stmt
        .query_map(params![like_pattern], |row| {
            Ok(SearchResult {
                id: row.get::<_, i64>(0)?.to_string(),
                path: row.get(1)?,
                name: row.get(2)?,
                ext: row.get(3)?,
                size: row.get(4)?,
                modified_at: row.get(5)?,
            })
        })
        .map_err(|e| e.to_string())?
        .filter_map(|r| r.ok())
        .collect();

    let has_more = total >= 500;

    tracing::info!("[SEARCH] Returned {} results, total={}, has_more={}", results.len(), total, has_more);

    Ok(SearchResponse {
        results,
        total: total as usize,
        has_more,
    })
}
