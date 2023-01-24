"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.DB_SECRET,
    database: process.env.DB_TABLE,
    synchronize: false,
    logging: true,
    entities: ["src/db/entity/*.ts"],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-source.js.map