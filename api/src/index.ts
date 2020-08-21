import dotenv from "dotenv";
import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";
import generalRoutes from "./routes/generalRoutes";

//Inicia base de datos
import "./intraestructure/database/config";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

//config
dotenv.config();
const app: Application = express();
const port = 4000;

app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/general", generalRoutes);

app.get("/", (req, res) => {
  res.send("El API está funcionando!");
});

//client
app.use("/app", express.static("../client/build"));
app.use("/static", express.static("../client/build/static"));

//middlewares
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
