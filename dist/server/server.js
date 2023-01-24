"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const express_1 = __importDefault(require("./loaders/express"));
const db_1 = __importDefault(require("./loaders/db"));
const route_1 = require("./loaders/route");
const PORT = process.env.PORT || 3000;
function bootServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, db_1.default)();
            yield (0, express_1.default)({ app: app_1.app, db });
            yield (0, route_1.routeLoader)({ app: app_1.app });
        }
        catch (err) {
            console.error("DB CONNECTION ERROR", err);
        }
        app_1.app.listen(PORT, () => {
            console.log(`LISTEN ON http://localhost:${PORT}/`);
        });
    });
}
bootServer();
