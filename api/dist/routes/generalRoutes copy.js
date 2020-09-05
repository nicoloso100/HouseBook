"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generalController_1 = __importDefault(require("../controllers/generalController"));
class GeneralRoutes {
    constructor() {
        this.router = express_1.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router.post("/createPublication", generalController_1.default.getCities);
    }
}
exports.default = GeneralRoutes;
//# sourceMappingURL=generalRoutes copy.js.map