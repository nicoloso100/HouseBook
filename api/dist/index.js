"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const errorHandlerMiddleware_1 = require("./middlewares/errorHandlerMiddleware");
const generalRoutes_1 = __importDefault(require("./routes/generalRoutes"));
const config_1 = require("./intraestructure/database/config");
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const publicationRoutes_1 = __importDefault(require("./routes/publicationRoutes"));
class Server {
    constructor() {
        this.port = 4000;
        this.app = express_1.default();
        this.generalRoutes = new generalRoutes_1.default();
        this.authRoutes = new authRoutes_1.default();
        this.publicationRoutes = new publicationRoutes_1.default();
        this.config();
    }
    config() {
        dotenv_1.default.config();
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default({
            origin: "*",
        }));
        config_1.StartDatabase();
        this.routes();
        this.pages();
        this.middlewares();
    }
    routes() {
        this.app.use("/api/auth", this.authRoutes.router);
        this.app.use("/api/general", this.generalRoutes.router);
        this.app.use("/api/publication", this.publicationRoutes.router);
    }
    pages() {
        this.app.get("/", (req, res) => {
            res.send("El API está funcionando!");
        });
        this.app.use("/app", express_1.default.static("../client/build"));
        this.app.use("/static", express_1.default.static("../client/build/static"));
    }
    middlewares() {
        this.app.use(errorHandlerMiddleware_1.errorHandlerMiddleware);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map