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
exports.profile = exports.singin = exports.singup = void 0;
const User_1 = __importDefault(require("../intraestructure/models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.singup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //create user
        const user = new User_1.default({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        user.password = yield user.encryptPassword(user.password);
        const savedUSer = yield user.save();
        //token
        const token = jsonwebtoken_1.default.sign({ _id: savedUSer._id }, process.env.TOKEM_SECRET || "tokenTest");
        res.header("auth-token", token).json(savedUSer);
    }
    catch (error) {
        console.log(error);
    }
});
exports.singin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email: req.body.email });
    if (!user)
        return res.status(404).json("Email or password is worng");
    const correctPassword = yield user.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json("invalid password");
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEM_SECRET || "tokenTest");
    res.header("auth-token", token).json(user);
});
exports.profile = (req, res) => {
    const user = User_1.default.findById(req.userId);
    if (!user)
        return res.status(404).json("no existe el usuario");
    res.send(user);
};
//# sourceMappingURL=authController.js.map