"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicationController_1 = __importDefault(require("../controllers/publicationController"));
class PublicationRoutes {
    constructor() {
        this.router = express_1.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router.get("/getPublications", publicationController_1.default.getPublications);
        this.router.get("/getPublications/:id", publicationController_1.default.getPublicationsById);
        this.router.post("/createPublication", publicationController_1.default.createPublication);
        this.router.post("/getPublicationsByType", publicationController_1.default.getPublicationsByType);
        this.router.post("/getPublicationsByUser", publicationController_1.default.getPublicationsByUser);
        this.router.post("/getPublicationsByFilters", publicationController_1.default.getPublicationsByFilters);
        this.router.get("/deletePublication/:id", publicationController_1.default.deletePublicationById);
    }
}
exports.default = PublicationRoutes;
//# sourceMappingURL=publicationRoutes.js.map