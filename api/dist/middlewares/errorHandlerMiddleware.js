"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const customError_1 = require("../utils/errorHandler/customError");
const customAuthError_1 = require("../utils/errorHandler/customAuthError");
exports.errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    if (err instanceof customError_1.HandledError) {
        const newError = {
            error: err.message,
        };
        res.status(400).json(newError);
    }
    if (err instanceof customAuthError_1.AuthError) {
        const newError = {
            error: err.message,
        };
        res.status(401).json(newError);
    }
    else {
        const newError = {
            error: "Ha ocurrido un error en el servidor, por favor intentelo nuevamente.",
        };
        res.status(500).json(newError);
    }
};
//# sourceMappingURL=errorHandlerMiddleware.js.map