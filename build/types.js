/**
 * Error types that can occur during notification operations
 */
export var NotificationErrorType;
(function (NotificationErrorType) {
    NotificationErrorType["INVALID_PARAMS"] = "INVALID_PARAMS";
    NotificationErrorType["COMMAND_FAILED"] = "COMMAND_FAILED";
    NotificationErrorType["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    NotificationErrorType["PROMPT_CANCELLED"] = "PROMPT_CANCELLED";
    NotificationErrorType["UNKNOWN"] = "UNKNOWN";
})(NotificationErrorType || (NotificationErrorType = {}));
export class NotificationError extends Error {
    constructor(type, message) {
        super(message);
        this.type = type;
        this.name = 'NotificationError';
    }
}
