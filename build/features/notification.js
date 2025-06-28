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
import { NotificationError, NotificationErrorType } from '../types.js';
import { execAsync } from '../utils/command.js';
/**
 * Validates notification parameters
 */
function validateParams(params) {
    if (!params.title || typeof params.title !== 'string') {
        throw new NotificationError(NotificationErrorType.INVALID_PARAMS, 'Title is required and must be a string');
    }
    if (!params.message || typeof params.message !== 'string') {
        throw new NotificationError(NotificationErrorType.INVALID_PARAMS, 'Message is required and must be a string');
    }
    if (params.subtitle && typeof params.subtitle !== 'string') {
        throw new NotificationError(NotificationErrorType.INVALID_PARAMS, 'Subtitle must be a string');
    }
}
/**
 * Checks if terminal-notifier is available on the system
 */
async function checkTerminalNotifierAvailability() {
    try {
        await execAsync('which terminal-notifier');
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Escapes shell arguments for terminal-notifier
 */
function escapeShellArg(arg) {
    // Escape for shell execution
    return `"${arg.replace(/"/g, '\\"')}"`;
}
/**
 * Builds the terminal-notifier command for sending a notification
 */
function buildNotificationCommand(params) {
    const { title, message, subtitle, sound = true } = params;
    let command = `terminal-notifier -title ${escapeShellArg(title)} -message ${escapeShellArg(message)}`;
    if (subtitle) {
        command += ` -subtitle ${escapeShellArg(subtitle)}`;
    }
    if (sound) {
        command += ` -sound default`;
    }
    return command;
}
/**
 * Sends a notification using terminal-notifier
 */
export async function sendNotification(params) {
    try {
        validateParams(params);
        // Check if terminal-notifier is available
        const isAvailable = await checkTerminalNotifierAvailability();
        if (!isAvailable) {
            throw new NotificationError(NotificationErrorType.COMMAND_FAILED, 'terminal-notifier is not installed. Please install it using: brew install terminal-notifier');
        }
        const command = buildNotificationCommand(params);
        await execAsync(command);
    }
    catch (error) {
        if (error instanceof NotificationError) {
            throw error;
        }
        // Handle different types of system errors
        const err = error;
        if (err.message.includes('terminal-notifier: command not found')) {
            throw new NotificationError(NotificationErrorType.COMMAND_FAILED, 'terminal-notifier is not installed. Please install it using: brew install terminal-notifier');
        }
        else if (err.message.includes('permission')) {
            throw new NotificationError(NotificationErrorType.PERMISSION_DENIED, 'Permission denied when trying to send notification. Please check macOS notification settings.');
        }
        else {
            throw new NotificationError(NotificationErrorType.UNKNOWN, `Unexpected error: ${err.message}`);
        }
    }
}
