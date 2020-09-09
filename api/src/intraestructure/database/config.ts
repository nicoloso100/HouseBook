import mongoose from "mongoose";
import { Seeder } from "mongo-seeding";
import { SeedCities } from "./seeds/cities.seeder";
import { mongoConfig } from "./contants";

export var gridFsBucket: any = null;

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
      gridFsBucket = new mongoose.mongo.GridFSBucket(mon.connection.db, {
        bucketName: "Images",
      });

      console.log("Se ha conectado satisfactoriamente con la base de datos.");
    })
    .catch((e) =>
      console.log(
        `No se ha podido iniciar la base de datos.\n\n ${e} \n\nCadena de conexión:${mongoConfig.database}`
      )
    );
};
