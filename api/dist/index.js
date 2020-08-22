"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
require("./database");
dotenv_1.default.config();
const app = express_1.default();
const port = 3001;
//middleware
app.use(express_1.default.json());
//routes
app.use('/api/auth', auth_1.default);
app.get("/", (req, res) => {
    //res.send("Hello World!");
    res.json({ "miguel": "miguel" });
});
app.use("/app", express_1.default.static("../client/build"));
app.use("/static", express_1.default.static("../client/build/static"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map