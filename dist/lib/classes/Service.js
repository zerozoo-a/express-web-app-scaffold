"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const app_1 = require("../../server/app");
const data_source_1 = require("../../db/data-source");
class Service {
    constructor({ DOMAIN }) {
        this.repo = data_source_1.AppDataSource;
        this.PATHS = {
            public: `${process.env.PWD}/public`,
        };
        this.THEME = {
            default: `${process.env.PWD}/views/index.html`,
        };
        this.layout = (key) => {
            return this.THEME[key];
        };
        this.DOMAIN = DOMAIN;
        this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
        this.app = app_1.app;
        this.props = {
            title: this.constructor.name,
            layout: this.layout("default"),
            components: [],
        };
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map