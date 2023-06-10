const express = require("express");
const app = express();
const newsRouter = require("./router/news");

app.use(express.static("Public"));
app.use(express.static("data/uploads"));
app.use("/api", newsRouter);

app.listen(5000, () => {
  console.log("Port is listening");
});
