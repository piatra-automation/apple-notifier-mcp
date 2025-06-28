/**
 * Notification Feature - Enhanced with Terminal-Notifier Support
 *
 * Original implementation by Michael Darmousseh using osascript
 * Enhanced by PIATRA to use terminal-notifier for better icon control
 *
 * Changes:
 * - Replaced osascript with terminal-notifier for better notification icons
 * - Added dependency checking and installation guidance
 * - Improved error handling with specific terminal-notifier messages
 * - Enhanced shell argument escaping for security
 */
import { NotificationParams } from '../types.js';
/**
 * Sends a notification using terminal-notifier
 */
export declare function sendNotification(params: NotificationParams): Promise<void>;
