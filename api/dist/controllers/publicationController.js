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
const customError_1 = require("../utils/errorHandler/customError");
const publicationRepository_1 = __importDefault(require("../intraestructure/repositories/publicationRepository"));
class PublicationController {
    createPublication(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const publication = yield publicationRepository_1.default.createPublication(data);
                res.json(publication);
            }
            catch (err) {
                console.log(err);
                next(new customError_1.HandledError("No se ha podido crear la publicación."));
            }
        });
    }
    getPublications(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publications = yield publicationRepository_1.default.getPublications();
                res.json(publications);
            }
            catch (_a) {
                next(new customError_1.HandledError("No se ha podido obtener la lista de publicaciones."));
            }
        });
    }
    getPublicationsById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const publications = yield publicationRepository_1.default.getPublicationById(id);
                res.json(publications);
            }
            catch (_a) {
                next(new customError_1.HandledError("No se ha podido obtener la publicacion que buscas."));
            }
        });
    }
    getPublicationsByUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_id = req.body.user_id;
                const publications = yield publicationRepository_1.default.getPublicationByUser(user_id);
                res.json(publications);
            }
            catch (_a) {
                next(new customError_1.HandledError("Error al consultar publicaciones del usuario."));
            }
        });
    }
    getPublicationsByFilters(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type_of_housing = req.body.type_of_housing;
                const property_type_id = req.body.property_type_id;
                const publications = yield publicationRepository_1.default.getPublicationByFilters(type_of_housing, property_type_id);
                res.json(publications);
            }
            catch (_a) {
                next(new customError_1.HandledError("Error al consultar publicaciones del usuario."));
            }
        });
    }
    getPublicationsByType(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type = req.body.type;
                const search = req.body.search;
                const publications = yield publicationRepository_1.default.getPublicationsByType(type, search);
                res.json(publications);
            }
            catch (_a) {
                next(new customError_1.HandledError("No se ha podido obtener las publicaciones por el tipo de busqueda."));
            }
        });
    }
    deletePublicationById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield publicationRepository_1.default.deletePublicationById(id);
                res.json("Publicación eliminada exitosamente");
            }
            catch (_a) {
                next(new customError_1.HandledError("No se ha podido eliminar la publicación."));
            }
        });
    }
}
const publicationController = new PublicationController();
exports.default = publicationController;
//# sourceMappingURL=publicationController.js.map