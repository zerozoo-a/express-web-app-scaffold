import mysql from "mysql2";

export const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "employees",
  password: "141800",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
