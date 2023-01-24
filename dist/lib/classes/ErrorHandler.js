"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error2 = void 0;
class Error2 extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
    }
}
exports.Error2 = Error2;
//# sourceMappingURL=ErrorHandler.js.map