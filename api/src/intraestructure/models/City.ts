import { Schema, model, Document } from "mongoose";

export type ICityModel = ICity & Document;

const citySchema = new Schema({
  region: String,
  codigoDaneDepartamento: Number,
  departamento: String,
  codigoDaneMunicipio: Number,
  municipio: String,
});

const CityModel = model<ICityModel>("cities", citySchema);
export default CityModel;
