// --- Imports & Config ---
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Note = require("./models/note");

const app = express();

// --- Middleware (general setup) ---
app.use(express.static("dist"));
app.use(express.json());
app.use(cors());

// --- Custom Logger Middleware ---
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(requestLogger);

// --- DB Connection ---
const url = process.env.MONGODB_URL;
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// --- Routes ---
app.get("/api/notes", (request, response, next) => {
  Note.find({})
    .then((notes) => response.status(200).json(notes))
    .catch((error) => next(error));
});

app.get("/api/notes/:noteid", (request, response, next) => {
  const myId = request.params.noteid;
  Note.findById(myId)
    .then((myNote) => {
      if (myNote) {
        response.json(myNote);
      } else {
        response.status(404).send({ error: `No note found with id: ${myId}` });
      }
    })
    .catch((error) => next(error));
});

app.post("/api/notes", (request, response, next) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note
    .save()
    .then((savedNote) => response.status(201).json(savedNote))
    .catch((error) => next(error));
});

app.delete("/api/notes/:noteid", (request, response, next) => {
  const myId = request.params.noteid;

  Note.findByIdAndDelete(myId)
    .then(() => response.status(204).end())
    .catch((error) => next(error));
});

// --- Unknown Endpoint Middleware ---
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

// --- Error Handler Middleware ---
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  // If not handled, forward to Express’s default handler
  next(error);
};
app.use(errorHandler);

// --- Server ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
