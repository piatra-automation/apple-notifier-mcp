import { PromptParams, PromptResult } from '../types.js';
/**
 * Prompts the user for input using osascript
 */
export declare function promptUser(params: PromptParams): Promise<PromptResult>;
