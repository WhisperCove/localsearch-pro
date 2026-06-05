# DeepSearch

<p align="center">
  <img src="src-tauri/icons/128x128.png" alt="DeepSearch" width="128" height="128">
</p>

<p align="center">
  <strong>本地文件智能检索工具</strong>
</p>

<p align="center">
  全离线 · 内容级检索 · 中文友好 · 毫秒级响应
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/platform-Windows%2010%2F11-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
</p>

---

## 项目简介

**DeepSearch** 是一款面向中文用户的全离线本地知识检索工具。与系统自带搜索、Everything 等工具不同，DeepSearch 支持**文件内容级搜索**，能够检索文件内部的文字内容，而不仅仅是文件名。

### 核心价值

- **隐私零泄露**：全程离线运行，数据不离开您的设备
- **内容级检索**：搜索文件内部文字内容，不只搜文件名
- **中文友好**：完美支持中文文件名和路径
- **毫秒级响应**：百万级文档下快速检索

---

## 核心特性

### 搜索能力

| 特性 | 说明 |
|------|------|
| 全文搜索 | 搜索文件名和文件内容 |
| 中文分词 | 基于 SQLite LIKE 查询，支持中文模糊匹配 |
| 智能排序 | 名称匹配优先，特殊符号文件置底 |
| 分类筛选 | 按文档/代码/图片/视频/快捷方式分类 |
| 结果限制 | 单次最多返回 500 条结果 |

### 预览支持

| 类型 | 支持格式 | 预览方式 |
|------|----------|----------|
| 文本 | txt, md, log, csv, json, xml, yaml, ini, cfg | 直接显示内容 |
| 代码 | js, ts, py, rs, go, java, cpp, css, html, vue, svelte | 带行号显示 |
| 文档 | pdf, docx | 内置渲染 |
| 图片 | png, jpg, gif, bmp, webp, svg, heic | 直接显示 |
| 视频 | mp4, avi, mov, mkv, webm | 内置播放器 |
| 音频 | mp3, wav, flac, aac, ogg | 内置播放器 |
| 演示 | pptx, ppt, odp | 调用系统程序打开 |

### 系统集成

- **自动索引**：启动时自动扫描用户常用目录
- **多盘符支持**：扫描 C:-Z: 所有可用驱动器
- **多语言目录**：自动识别中/英/日/韩/法/俄/西/德系统目录名
- **云盘支持**：自动检测 OneDrive、Google Drive、Dropbox
- **自定义窗口**：无边框设计，自定义最小化/最大化/关闭按钮

---

## 支持的文件格式

| 分类 | 格式 |
|------|------|
| **文档** | txt, md, log, csv, json, xml, yaml, yml, toml, pdf, docx, doc, xlsx, xls, pptx, ppt, rtf, odt, ods, odp |
| **代码** | js, jsx, ts, tsx, py, rs, go, java, cpp, c, h, hpp, css, html, scss, less, sh, bash, ps1, bat, cmd, sql, r, lua, vim, ini, cfg, conf, env, vue, svelte, astro, graphql, proto, kt, swift, dart, php, rb, scala |
| **图片** | png, jpg, jpeg, gif, bmp, webp, svg, ico, tiff, tif, heic, heif |
| **视频** | mp4, avi, mov, mkv, wmv, flv, webm, m4v, 3gp, mpg, mpeg |
| **音频** | mp3, wav, flac, aac, ogg, m4a, wma, opus |
| **压缩包** | zip, rar, 7z, tar, gz, bz2, xz |
| **快捷方式** | lnk, url |

---

## 系统要求

| 项目 | 要求 |
|------|------|
| 操作系统 | Windows 10 / Windows 11 |
| 架构 | x64 |
| 磁盘空间 | 10 MB（安装包） |
| 内存 | 建议 4 GB 以上 |

---

## 安装指南

### 方法一：NSIS 安装包（推荐）

1. 下载 `DeepSearch_0.1.0_x64-setup.exe`
2. 双击运行安装程序
3. 按照提示完成安装
4. 安装完成后会在桌面创建快捷方式

### 方法二：MSI 安装包

1. 下载 `DeepSearch_0.1.0_x64_en-US.msi`
2. 双击运行安装程序
3. 按照提示完成安装

---

## 使用教程

### 首次启动

1. 双击桌面快捷方式启动 DeepSearch
2. 首次启动会显示启动屏（约 2 秒）
3. 首次使用会显示产品介绍向导（3 页）
4. 程序会自动开始索引您的文件

### 搜索文件

1. 在顶部搜索框中输入关键词
2. 支持中文、英文、混合搜索
3. 搜索结果会实时显示在左侧列表
4. 点击搜索结果可预览文件内容

### 筛选文件类型

使用搜索框下方的筛选标签：

| 标签 | 说明 |
|------|------|
| 全部 | 显示所有类型的文件 |
| 文档 | 仅显示文档类文件 |
| 代码 | 仅显示代码文件 |
| 图片 | 仅显示图片文件 |
| 视频 | 仅显示视频文件 |
| 快捷方式 | 仅显示 .lnk 和 .url 文件 |
| 其他 | 显示不属于以上分类的文件 |

### 快捷操作

| 操作 | 说明 |
|------|------|
| `Ctrl + K` | 聚焦搜索框 |
| 打开文件夹 | 打开文件所在目录 |
| 复制路径 | 复制文件完整路径到剪贴板 |
| 复制内容 | 复制文件文本内容到剪贴板 |
| 刷新 | 重新索引文件 |

---

## 技术架构

### 架构图

```
┌─────────────────────────────────────────────────────────┐
│                    Tauri v2 桌面应用                      │
├─────────────────────────┬───────────────────────────────┤
│     前端 (WebView)       │        后端 (Rust)             │
│                         │                               │
│  React 18 + TypeScript  │  ┌─────────────────────────┐  │
│  TailwindCSS 4.x        │  │      Commands 层        │  │
│  Vite 6.x               │  │  (Tauri IPC 接口)       │  │
│                         │  └────────────┬────────────┘  │
│  职责:                  │               │               │
│  - UI 渲染              │  ┌────────────▼────────────┐  │
│  - 用户交互             │  │      Core 层            │  │
│  - 状态管理             │  │  (搜索/索引/结果排序)    │  │
│                         │  └────────────┬────────────┘  │
│                         │               │               │
│                         │  ┌────────────▼────────────┐  │
│                         │  │    基础设施层            │  │
│                         │  │  SQLite │ walkdir │ ...  │  │
│                         │  └─────────────────────────┘  │
├─────────────────────────┴───────────────────────────────┤
│                Tauri IPC (进程内通信)                     │
└─────────────────────────────────────────────────────────┘
```

### 技术栈

| 层级 | 技术 | 版本 | 说明 |
|------|------|------|------|
| 桌面框架 | Tauri | v2 | 轻量级、高性能桌面应用框架 |
| 前端框架 | React | 18 | 组件化 UI 开发 |
| 类型系统 | TypeScript | 5.x | 静态类型检查 |
| 样式框架 | TailwindCSS | 4.x | 原子化 CSS |
| 构建工具 | Vite | 6.x | 快速热更新 |
| 后端语言 | Rust | 1.70+ | 高性能、内存安全 |
| 数据库 | SQLite | 3.x | 嵌入式数据库 |
| 文件扫描 | walkdir | 2.x | 递归目录遍历 |
| 序列化 | serde | 1.x | JSON 序列化 |
| 异步运行时 | tokio | 1.x | Rust 异步编程 |

### 数据流

**搜索流程：**
```
用户输入 → 前端防抖(300ms) → Tauri IPC → Rust 后端
    ↓
SQLite LIKE 查询 → 结果排序 → 返回前端
    ↓
前端渲染结果列表 → 点击预览 → 加载文件内容
```

**索引流程：**
```
启动 → 扫描用户目录 → walkdir 遍历文件
    ↓
提取文件元数据 → SQLite 存储 → 完成索引
```

---

## 项目结构

```
DeepSearch/
├── src/                              # 前端源码
│   ├── App.tsx                       # 主应用组件
│   ├── main.tsx                      # React 入口
│   ├── components/                   # UI 组件
│   │   ├── SearchBar.tsx             # 搜索栏
│   │   ├── ResultList.tsx            # 结果列表
│   │   ├── PreviewPanel.tsx          # 预览面板
│   │   ├── FilterBar.tsx             # 筛选栏
│   │   ├── StatusBar.tsx             # 状态栏
│   │   ├── SplashScreen.tsx          # 启动屏
│   │   └── FirstRunWizard.tsx        # 首次向导
│   ├── hooks/                        # React Hooks
│   │   └── useSearch.ts              # 搜索 Hook
│   ├── types/                        # TypeScript 类型
│   │   └── index.ts                  # 类型定义
│   └── styles/                       # 样式
│       └── globals.css               # 全局样式
│
├── src-tauri/                        # 后端源码
│   ├── src/
│   │   ├── main.rs                   # Rust 入口
│   │   ├── lib.rs                    # 应用初始化
│   │   ├── commands/                 # Tauri 命令
│   │   │   ├── search.rs             # 搜索命令
│   │   │   ├── index.rs              # 索引命令
│   │   │   ├── preview.rs            # 预览命令
│   │   │   └── config.rs             # 配置命令
│   │   ├── core/                     # 核心逻辑
│   │   │   └── index_manager.rs      # 索引管理器
│   │   └── db/                       # 数据库
│   │       ├── mod.rs                # 数据库初始化
│   │       └── schema.sql            # 表结构
│   ├── Cargo.toml                    # Rust 依赖
│   └── tauri.conf.json               # Tauri 配置
│
├── package.json                      # 前端依赖
├── vite.config.ts                    # Vite 配置
├── tsconfig.json                     # TypeScript 配置
└── README.md                         # 本文档
```

---

## 开发环境

### 前置要求

- **Node.js** 18+
- **Rust** 1.70+
- **Visual Studio Build Tools 2022**（Windows 必需）

### 安装依赖

```bash
# 安装前端依赖
npm install

# 安装 Tauri CLI
npm install -g @tauri-apps/cli
```

### 开发模式

```bash
# 启动开发服务器（前端热更新 + Rust 后端）
npm run tauri dev
```

首次启动会编译 Rust 依赖，耗时约 5-10 分钟。之后修改前端代码会即时热更新。

### 构建安装包

```bash
# 构建生产版本
npm run tauri build
```

构建完成后，安装包位于：
- NSIS: `src-tauri/target/release/bundle/nsis/`
- MSI: `src-tauri/target/release/bundle/msi/`

---

## 自动索引范围

DeepSearch 会在首次启动时自动扫描以下目录：

| 目录类型 | 扫描内容 |
|----------|----------|
| 用户目录 | Desktop, Documents, Downloads, Pictures, Music, Videos |
| 中文目录 | 桌面, 文档, 下载, 图片, 音乐, 视频 |
| 云盘 | OneDrive, Google Drive, Dropbox |
| 其他驱动器 | D:, E:, F: 等非系统驱动器 |

### 多语言支持

自动识别以下语言的系统目录名：

| 语言 | Desktop | Documents | Downloads |
|------|---------|-----------|-----------|
| 中文 | 桌面 | 文档 | 下载 |
| 英文 | Desktop | Documents | Downloads |
| 日文 | デスクトップ | ドキュメント | ダウンロード |
| 韩文 | 바탕 화면 | 문서 | 다운로드 |
| 法文 | Bureau | Documents | Téléchargements |
| 俄文 | Рабочий стол | Документы | Загрузки |
| 西班牙文 | Escritorio | Documentos | Descargas |

---

## 常见问题

### Q: 为什么搜索不到文件？

A: 可能的原因：
1. 索引尚未完成 - 请等待左下角显示"已索引"状态
2. 文件在未扫描的目录 - 点击刷新按钮重新索引
3. 文件格式不支持 - 检查文件扩展名是否在支持列表中

### Q: 如何添加自定义目录？

A: 当前版本暂不支持手动添加目录。程序会自动扫描用户常用目录和所有非系统驱动器。

### Q: 为什么有些文件预览显示"无法预览此格式"？

A: 部分格式（如旧版 .doc、加密 PDF）暂不支持预览，但仍然可以搜索到。

### Q: 程序会联网吗？

A: 不会。DeepSearch 是完全离线的应用程序，不会发送任何数据到网络。

### Q: 如何卸载？

A: 通过 Windows 设置 → 应用 → 找到 DeepSearch → 卸载

---

## 更新日志

### v0.1.0 (2026-05-30)

- 首次发布
- 全文搜索功能
- 多格式文件预览（文本、代码、PDF、DOCX、图片、视频、音频）
- 分类筛选（文档、代码、图片、视频、快捷方式、其他）
- 多语言目录支持（7 种语言）
- 自动索引（用户目录 + 所有驱动器）
- 自定义窗口控制（最小化、最大化、关闭）
- 启动屏 + 首次运行向导
- Toast 通知系统
- 复制路径 / 打开文件夹功能

---

## 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。

---

## 联系方式

- **Gitee**: https://gitee.com/pure_full_of_smile/DeepSearch
- **GitHub**: https://github.com/WhisperCove/localsearch-pro

---

## 致谢

感谢以下开源项目：

- [Tauri](https://tauri.app/) - 桌面应用框架
- [React](https://react.dev/) - UI 框架
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架
- [SQLite](https://www.sqlite.org/) - 嵌入式数据库
- [walkdir](https://github.com/BurntSushi/walkdir) - 目录遍历
- [lucide-react](https://lucide.dev/) - 图标库
