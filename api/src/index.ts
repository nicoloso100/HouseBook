import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import GeneralRoutes from "./routes/generalRoutes";
import { StartDatabase } from "./intraestructure/database/config";
import cors from "cors";
import AuthRoutes from "./routes/authRoutes";
import PublicationRoutes from "./routes/publicationRoutes";

class Server {
  private app: Application;
  private port = 4000;
  private generalRoutes: GeneralRoutes;
  private authRoutes: AuthRoutes;
  private publicationRoutes: PublicationRoutes;

  constructor() {
    this.app = express();
    this.generalRoutes = new GeneralRoutes();
    this.authRoutes = new AuthRoutes();
    this.publicationRoutes = new PublicationRoutes();
    this.config();
  }

  config(): void {
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
    this.app.use("/api/auth", this.authRoutes.router);
    this.app.use("/api/general", this.generalRoutes.router);
    this.app.use("/api/publication", this.publicationRoutes.router);
  }

  pages(): void {
    this.app.get("/checkapi", (req, res) => {
      res.send("El API está funcionando!");
    });
    this.app.use("/", express.static("../client/build"));
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
