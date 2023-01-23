import mysql from "mysql2/promise";

export default async () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: process.env.DB_TABLE,
    password: process.env.DB_SECRET,
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0,
  });

  const conn_1 = await pool.getConnection();
  const conn_2 = await pool.getConnection();
  return { pool, conns: [conn_1, conn_2] };
};
