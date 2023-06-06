const express = require("express");
const app = express();
const logger = require("morgan");

app.use(express.json());
app.use(logger("dev"));

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);

// POST route
app.post("/api/v1/crear", apiController.crear);

module.exports = app;
