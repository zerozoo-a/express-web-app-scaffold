import { app } from "./app";
import expressLoader from "./loaders/express";
import poolLoader from "./loaders/db";

const PORT = process.env.PORT || 3000;

async function bootServer() {
  const db = await poolLoader();
  const loadedApp = await expressLoader({ app, db });

  loadedApp.listen(PORT, () => {
    console.log(`LISTEN ON http://localhost:${PORT}/`);
  });
}

bootServer();
