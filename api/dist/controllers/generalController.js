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
const generalRepository_1 = __importDefault(require("../intraestructure/repositories/generalRepository"));
class GeneralController {
    getCities(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = req.query["filter"];
                if (!filter) {
                    filter = "";
                }
                const cities = yield generalRepository_1.default.getCities(filter);
                res.json(cities);
            }
            catch (_a) {
                next(new customError_1.HandledError("No se ha podido obtener la lista de ciudades."));
            }
        });
    }
}
const generalController = new GeneralController();
exports.default = generalController;
//# sourceMappingURL=generalController.js.map