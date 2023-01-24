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
const promise_1 = __importDefault(require("mysql2/promise"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = promise_1.default.createPool({
        host: "localhost",
        user: "root",
        database: process.env.DB_TABLE,
        password: process.env.DB_SECRET,
        waitForConnections: true,
        connectionLimit: 2,
        queueLimit: 0,
    });
    const conn_1 = yield pool.getConnection();
    const conn_2 = yield pool.getConnection();
    return { pool, conns: [conn_1, conn_2] };
});
