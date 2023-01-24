import { AppDataSource } from "../../db/data-source";

export default async function ormLoader() {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });
}
