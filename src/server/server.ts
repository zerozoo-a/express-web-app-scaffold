import { app } from "./app";
import expressLoader from "./loaders/express";
import dbLoader from "./loaders/db";

const PORT = process.env.PORT || 3000;

async function bootServer() {
  const db = await dbLoader();
  await expressLoader({ app, db });

  app.listen(PORT, () => {
    console.log(`LISTEN ON http://localhost:${PORT}/`);
  });
}

bootServer();
