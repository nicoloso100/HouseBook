"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const customError_1 = require("../utils/errorHandler/customError");
exports.errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customError_1.HandledError) {
        res.status(400).send(err.message);
    }
    else {
        res
            .status(500)
            .send("Ha ocurrido un error en el servidor, por favor intentelo nuevamente.");
    }
};
//# sourceMappingURL=errorHandlerMiddleware.js.map