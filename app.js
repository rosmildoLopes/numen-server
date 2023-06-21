const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require('cors');
require('dotenv').config();
const session = require('express-session')

app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave:true,
  saveUninitialized:true
}))

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const useRouter = require("./routes/user");
const { connect } = require('./db/db');

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);
app.use("/user/v1", userRouter);
connect()

module.exports = app;
