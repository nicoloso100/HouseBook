"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const publicationSchema = new mongoose_1.Schema({
    user_id: mongoose_1.mongo.ObjectId,
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
    description: String,
    created_at: Date,
});
const PublicationModel = mongoose_1.model("Publication", publicationSchema);
exports.default = PublicationModel;
//# sourceMappingURL=Publications.js.map