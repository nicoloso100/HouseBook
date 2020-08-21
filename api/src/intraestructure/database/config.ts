import mongoose from "mongoose";
import { Seeder } from "mongo-seeding";
import { SeedCities } from "./seeds/cities.seeder";
import { mongoConfig } from "./contants";

mongoose
  .connect(mongoConfig.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    const seeder = new Seeder(mongoConfig);
    SeedCities(seeder);
  })
  .catch(() => console.log("No se ha podido iniciar la base de datos."));
