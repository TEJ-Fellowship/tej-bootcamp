const express = require("express");
const cors = require("cors");

const Note = require("./models/note");

const App = express();
App.use(express.static("build"));
App.use(cors());
App.use(express.json());

App.use((request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
});

// App.use(express.json());

App.get("/", (request, response) => {
  response.send("<h1>hello world there</h1>");
});

const notes = [];

App.get("/notes", (request, response) => {
  Note.find().then((result) => response.json(result));
  // response.json(notes);
});

App.get("/notes/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      next(error);
      // response.status(400).send({ error: "malformatted id" });
    });
});

App.delete("/notes/:id", (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

App.post("/notes", (request, response, next) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  note
    .save()
    .then((savedNote) => {
      response.json(savedNote);
    })
    .catch((error) => next(error));
});

App.put("/notes/:id", (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

App.use((request, response, next) => {
  response.status(404).send("<h1>No routes found for this request</h1>");
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    console.log("validation error");
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

// this has to be the last loaded middleware.
App.use(errorHandler);

const PORT = process.env.PORT || "3001";

App.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
