import { FileSelectParams, FileSelectResult } from '../types.js';
/**
 * Prompts user to select file(s) using native macOS file picker
 */
export declare function selectFile(params: FileSelectParams): Promise<FileSelectResult>;
