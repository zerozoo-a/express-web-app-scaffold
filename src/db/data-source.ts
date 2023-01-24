import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.DB_SECRET,
  database: process.env.DB_TABLE,
  synchronize: true,
  logging: true,
  entities: ["src/db/entity/*.ts"],
  subscribers: [],
  migrations: [],
});
