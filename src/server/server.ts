import "reflect-metadata";
import { app } from "./app";
import expressLoader from "./loaders/express.loader";
import poolLoader from "./loaders/db.loader";
import { routeLoader } from "./loaders/route.loader";
import ormLoader from "./loaders/orm.loader";

const PORT = process.env.PORT || 3000;

async function bootServer() {
  try {
    await ormLoader();
    const db = await poolLoader();
    await expressLoader({ app, db });
    await routeLoader({ app });
  } catch (err) {
    console.error("DB CONNECTION ERROR", err);
  }

  app.listen(PORT, () => {
    console.log(`LISTEN ON http://localhost:${PORT}/`);
  });
}

bootServer();
