"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_seeding_1 = require("mongo-seeding");
const cities_seeder_1 = require("./seeds/cities.seeder");
const contants_1 = require("./contants");
exports.StartDatabase = () => {
    mongoose_1.default
        .connect(contants_1.mongoConfig.database, {
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
                    const seeder = new mongo_seeding_1.Seeder(contants_1.mongoConfig);
                    cities_seeder_1.SeedCities(seeder);
                }
            }
        });
        console.log("Se ha conectado satisfactoriamente con la base de datos.");
    })
        .catch(() => console.log("No se ha podido iniciar la base de datos."));
};
//# sourceMappingURL=config.js.map