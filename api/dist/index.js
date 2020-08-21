"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const generalRoutes_1 = __importDefault(require("./routes/generalRoutes"));
//Inicia base de datos
require("./intraestructure/database/config");
const errorHandlerMiddleware_1 = require("./middlewares/errorHandlerMiddleware");
//config
dotenv_1.default.config();
const app = express_1.default();
const port = 4000;
app.use(express_1.default.json());
//routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/general", generalRoutes_1.default);
app.get("/", (req, res) => {
    res.send("El API está funcionando!");
});
//client
app.use("/app", express_1.default.static("../client/build"));
app.use("/static", express_1.default.static("../client/build/static"));
//middlewares
app.use(errorHandlerMiddleware_1.errorHandlerMiddleware);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map