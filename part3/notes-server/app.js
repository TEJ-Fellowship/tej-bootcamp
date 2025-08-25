const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const middleware = require("./utils/middleware");
const notesRouter = require("./controllers/notes");
const config = require("./utils/config");

app.use(middleware.requestLogger);
app.use(express.json());
app.use(cors());
// app.use(express.static("dist"));

mongoose
  .connect(config.MONGODB_URL)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use("/api/notes", notesRouter);

app.use(middleware.unknownEndpoint);

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(middleware.errorHandler);

module.exports = app;
