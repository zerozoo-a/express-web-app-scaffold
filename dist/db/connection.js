"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.conn = mysql2_1.default.createPool({
    host: "localhost",
    user: "root",
    database: process.env.DB_TABLE,
    password: process.env.DB_SECRET,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
