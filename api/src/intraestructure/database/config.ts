import mongoose from "mongoose";
import { Seeder } from "mongo-seeding";
import { SeedCities } from "./seeds/cities.seeder";
import { mongoConfig } from "./contants";

export const StartDatabase = () => {
  mongoose
    .connect(mongoConfig.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((mon) => {
      mon.connection.db
        .listCollections({ name: "cities" })
        .next((err, collinfo) => {
          if (!err) {
            if (!collinfo) {
              const seeder = new Seeder(mongoConfig);
              SeedCities(seeder);
            }
          }
        });
      console.log("Se ha conectado satisfactoriamente con la base de datos.");
    })
    .catch(() => console.log("No se ha podido iniciar la base de datos."));
};
