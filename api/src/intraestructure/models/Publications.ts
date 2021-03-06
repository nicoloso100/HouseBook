import { Schema, model, Document, mongo } from "mongoose";

export type IPublicationModel = IPublication & Document;

const publicationSchema = new Schema({
  user_id: String,
  title: String,
  price: Number,
  dimensions: Number,
  rooms: Number,
  bathrooms: Number,
  parkings: Number,
  neighborhood: String,
  ubication: String,
  city: String,
  nearby_sites: String,
  stratum: Number,
  antiquity: Number,
  description: String,
  type_of_housing: String,
  type_of_sale: String,
  created_at: Date,
  expiration_date: Date,
  thumbnail: String,
  web_site: String,
  whatsapp: String,
  email: String,
  phone: String,
  images: [String],
});

const PublicationModel = model<IPublicationModel>(
  "publications",
  publicationSchema
);
export default PublicationModel;
