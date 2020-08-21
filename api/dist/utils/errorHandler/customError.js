"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandledError = void 0;
class HandledError extends Error {
    constructor(message) {
        super(message);
        this.name = "HandledError";
    }
}
exports.HandledError = HandledError;
//# sourceMappingURL=customError.js.map