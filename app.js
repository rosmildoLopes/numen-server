const express = require("express");
const app = express();

app.use(express.json)

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

module.exports = app ;