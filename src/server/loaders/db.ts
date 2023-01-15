import mysql from "mysql2";

export default async () => {
  const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    database: process.env.DB_TABLE,
    password: process.env.DB_SECRET,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return connection;
};
