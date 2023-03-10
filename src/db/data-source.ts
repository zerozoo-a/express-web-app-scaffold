import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.DB_SECRET,
  database: process.env.DB_TABLE,
  synchronize: false,
  logging: true,
  entities: [
    process.env.profile === "dev"
      ? "src/db/entity/*.ts"
      : "dist/db/entity/*.js",
  ],
  subscribers: [],
  migrations: [],
});
