import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/app", express.static("../client/build"));
app.use("/static", express.static("../client/build/static"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
