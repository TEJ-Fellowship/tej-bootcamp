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

App.get("/notes/:id", (request, response) => {
  const currentId = Number(request.params.id);
  const thisNote = notes.find((note) => note.id === currentId);
  if (thisNote) response.json(thisNote);
  else
    response
      .status(404)
      .json({ error: 404, message: `there is no note with id ${currentId}` });
});

App.delete("/notes/:id", (request, response) => {
  const currentId = Number(request.params.id);
  notes = notes.filter((note) => note.id !== currentId);

  response.status(204).end();
});

App.post("/notes", (request, response) => {
  let myIncomingData = request.body;
  myIncomingData.id = notes.length + 1;
  notes.push(myIncomingData);

  response.status(201).json(myIncomingData);
});

App.use((request, response, next) => {
  response.status(404).send("<h1>No routes found for this request</h1>");
});

const PORT = process.env.PORT || "3001";

App.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
