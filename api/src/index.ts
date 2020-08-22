import dotenv from "dotenv";
import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import GeneralRoutes from "./routes/generalRoutes";
import { StartDatabase } from "./intraestructure/database/config";
import cors from "cors";

class Server {
  private app: Application;
  private port = 4000;
  private generalRoutes: GeneralRoutes;

  constructor() {
    this.app = express();
    this.generalRoutes = new GeneralRoutes();
    this.config();
  }

  config(): void {
    dotenv.config();
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "*",
      })
    );
    StartDatabase();
    this.routes();
    this.pages();
    this.middlewares();
  }
  
  routes(): void {
    this.app.use("/api/auth", authRoutes);
    this.app.use("/api/general", this.generalRoutes.router);
  }

  pages(): void {
    this.app.get("/", (req, res) => {
      res.send("El API está funcionando!");
    });
    this.app.use("/app", express.static("../client/build"));
    this.app.use("/static", express.static("../client/build/static"));
  }

  middlewares(): void {
    this.app.use(errorHandlerMiddleware);
  }

  start(): void {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.start();
