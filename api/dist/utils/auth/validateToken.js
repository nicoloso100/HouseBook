"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.tokenValidation = (req, res, next) => {
    const token = res.header('auth-token');
    if (!token)
        return res.status(401).json('Acceso denegado');
    const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEM_SECRET || 'tokenTest');
    req.userId = payload._id;
    next();
};
//# sourceMappingURL=validateToken.js.map