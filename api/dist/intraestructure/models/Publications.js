"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const publicationSchema = new mongoose_1.Schema({
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
    images: String,
    created_at: Date,
});
const PublicationModel = mongoose_1.model("publications", publicationSchema);
exports.default = PublicationModel;
//# sourceMappingURL=Publications.js.map