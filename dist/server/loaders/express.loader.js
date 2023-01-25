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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const data_source_1 = require("../../db/data-source");
function expressLoader({ app, db, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!db) {
            throw new Error("DB ERROR OCCURRED");
        }
        dotenv_1.default.config();
        app.use((req, res, next) => {
            if (!process.env.COOKIE_SECRET)
                throw new Error("TEST ERROR");
            next();
        });
        app.use((0, cors_1.default)());
        app.use(express_1.default.static(path_1.default.join(__dirname, `plubic`)));
        app.use((0, morgan_1.default)("dev"));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
        app.use((0, express_session_1.default)({
            resave: false,
            saveUninitialized: false,
            secret: process.env.COOKIE_SECRET || "ERROR",
            cookie: { httpOnly: true, secure: false },
            name: "session-cookie",
        }));
        app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "../public")));
        app.set("view engine", "html");
        nunjucks_1.default.configure("views", { express: app, watch: true, autoescape: true });
        app.set(`db`, db);
        app.set(`orm`, data_source_1.AppDataSource);
        const m = app.get("orm");
        return app;
    });
}
exports.default = expressLoader;
//# sourceMappingURL=express.loader.js.map