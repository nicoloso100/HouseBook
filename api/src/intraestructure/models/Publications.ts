import { Schema, model, Document, mongo } from "mongoose";

export type IPublicationModel = IPublication & Document;

const publicationSchema = new Schema({
    user_id: mongo.ObjectId,
    title: String,
    price: Number,
    dimensions: String,
    rooms: Number,
    bathrooms: Number,
    parkings: Number,
    neighborhood: String,
    ubication: String,
    nearby_sites: String,
    stratum: Number,
    build_time: Number,
    type_of_housing: Number,
    property_type_id: mongo.ObjectID,
    description: String,
    created_at: Date,
});

const PublicationModel = model<IPublicationModel>("Publication", publicationSchema);
export default PublicationModel;
