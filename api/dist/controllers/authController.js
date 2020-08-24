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
const User_1 = __importDefault(require("../intraestructure/models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRepository_1 = __importDefault(require("../intraestructure/repositories/authRepository"));
const customAuthError_1 = require("../utils/errorHandler/customAuthError");
class AuthController {
    singup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try { 
                if (!req.body || !req.body.username || !req.body.email || !req.body.password ){
                    next(new customAuthError_1.AuthError("Falta ingresar datos"));
                }
                const user = new User_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                });
                const validateEmail = yield authRepository_1.default.userSingIn(user.email);
                if (validateEmail){
                    next(new customAuthError_1.AuthError("El correo electronico ingresado ya se encuentra registrado"));
                } 
                const validateUsername = yield authRepository_1.default.validateUsername(user.username);
                if (validateUsername){
                    next(new customAuthError_1.AuthError("El nombre de usuario ya se encuentra registrado"));
                }                 
                user.password = yield user.encryptPassword(user.password);
                const savedUSer = yield user.save();
                const token = jsonwebtoken_1.default.sign({ _id: savedUSer._id }, process.env.TOKEM_SECRET || "tokenTest");
                res.header("auth-token", token).json(savedUSer);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    singin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.email) {
                next(new customAuthError_1.AuthError("No se envió el parámetro email."));
            }
            const user = yield authRepository_1.default.userSingIn(req.body.email);
            if (user === null) {
                next(new customAuthError_1.AuthError("Usuario o contraseña incorrecto."));
            }
            else {
                const correctPassword = yield user.validatePassword(req.body.password);
                if (!correctPassword)
                    return res.status(400).json("invalid password");
                const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEM_SECRET || "tokenTest");
                res.header("auth-token", token).json(user);
            }
        });
    }
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findById(req.userId);
            if (!user)
                return res.status(404).json("no existe el usuario");
            res.send(user);
        });
    }
}
const authController = new AuthController();
exports.default = authController;
//# sourceMappingURL=authController.js.map