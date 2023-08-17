const express = require("express");
const logger = require("morgan");
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

app.use(express.json());
app.use(logger());
app.use("/vehicles", vehicleRoutes);

module.exports = app;
