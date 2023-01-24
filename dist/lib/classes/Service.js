"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    constructor({ DOMAIN, app }) {
        this.DOMAIN = DOMAIN;
        this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
        this.app = app;
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map