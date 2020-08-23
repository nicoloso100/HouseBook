"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = require("../utils/auth/validateToken");
const authController_1 = __importDefault(require("../controllers/authController"));
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router.post("/singup", authController_1.default.singup);
        this.router.post("/singin", authController_1.default.singin);
        this.router.get("/profile", validateToken_1.tokenValidation, authController_1.default.profile);
    }
}
exports.default = AuthRoutes;
//# sourceMappingURL=authRoutes.js.map