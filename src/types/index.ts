export interface SearchResult {
  id: string;
  name: string;
  path: string;
  ext: string;
  size: number;
  modifiedAt: number;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  hasMore: boolean;
}

export interface PreviewResult {
  type: string;
  content: string;
  language?: string;
  metadata: FileMetadata;
}

export interface FileMetadata {
  id: string;
  name: string;
  path: string;
  ext: string;
  size: number;
  modifiedAt: number;
}

export interface IndexStatus {
  totalFiles: number;
  isIndexing: boolean;
  lastUpdated: number;
}

export interface AppConfig {
  theme: string;
  globalHotkey: string;
  maxResults: number;
  snippetLength: number;
  autoStart: boolean;
}

export type FilterType = "all" | "document" | "code" | "image" | "video" | "shortcut" | "other";
