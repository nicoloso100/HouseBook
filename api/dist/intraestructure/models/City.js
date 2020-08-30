"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    region: String,
    codigoDaneDepartamento: Number,
    departamento: String,
    codigoDaneMunicipio: Number,
    municipio: String,
});
const CityModel = mongoose_1.model("cities", citySchema);
exports.default = CityModel;
//# sourceMappingURL=City.js.map