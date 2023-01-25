"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const app_1 = require("../../server/app");
const data_source_1 = require("../../db/data-source");
class Service {
    constructor({ DOMAIN }) {
        this.repo = data_source_1.AppDataSource;
        this.DOMAIN = DOMAIN;
        this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
        this.app = app_1.app;
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map