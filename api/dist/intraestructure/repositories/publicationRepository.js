"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Publications_1 = __importDefault(require("../models/Publications"));
class PublicationRepository {
    createPublication(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publication = new Publications_1.default();
                publication.user_id = data.user_id;
                publication.title = data.title;
                publication.price = data.price;
                publication.dimensions = data.dimensions;
                publication.bathrooms = data.bathrooms;
                publication.parkings = data.parkings;
                publication.neighborhood = data.neighborhood;
                publication.ubication = data.ubication;
                publication.nearby_sites = data.nearby_sites;
                publication.stratum = data.stratum;
                publication.antiquity = data.antiquity;
                publication.type_of_housing = data.type_of_housing;
                publication.type_of_sale = data.type_of_sale;
                publication.description = data.description;
                publication.created_at = new Date();
                publication.save();
                return publication._id;
            }
            catch (error) {
                return error;
            }
        });
    }
    getPublications() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publications = yield Publications_1.default.find({});
                return publications;
            }
            catch (error) {
                return error;
            }
        });
    }
    getPublicationById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publications = yield Publications_1.default.find({ _id: _id });
                if (publications.length > 0) {
                    return {
                        status: true,
                        message: "Publicación encontrada",
                        data: publications,
                    };
                }
                else {
                    return {
                        status: false,
                        message: "No se encuentra la publicación",
                        data: [],
                    };
                }
            }
            catch (error) {
                return {
                    status: false,
                    message: "No se encuentra la publicación",
                    data: error,
                };
            }
        });
    }
    getPublicationsByType(type, search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let publications;
                switch (type) {
                    case 1:
                        publications = yield Publications_1.default.find({ title: search });
                        break;
                    case 2:
                        publications = yield Publications_1.default.find({ dimensions: search });
                        break;
                }
                return publications;
            }
            catch (error) {
                return error;
            }
        });
    }
    deletePublicationById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Publications_1.default.deleteOne({ _id: _id });
                return;
            }
            catch (error) {
                return error;
            }
        });
    }
}
const publicationRepository = new PublicationRepository();
exports.default = publicationRepository;
//# sourceMappingURL=publicationRepository.js.map