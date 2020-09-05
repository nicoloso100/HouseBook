import { Seeder } from "mongo-seeding";
import Path from "path";

export const SeedCities = async (seeder: Seeder) => {
  try {
    const collections = seeder.readCollectionsFromPath(
      Path.resolve("./src/intraestructure/database/seedsData/")
    );
    await seeder.import(collections);
  } catch (err) {
    console.log("Error al ejecutar el seed de ciudades");
  }
};
