import dotenv from 'dotenv';
import express, { Application } from "express";
import authRoutes from './routes/auth';
import './database'

dotenv.config();
const app: Application = express();
const port = 3001;

//middleware
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.json({"miguel": "miguel"})
});

app.use("/app", express.static("../client/build"));
app.use("/static", express.static("../client/build/static"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
