const express = require("express");
const cors = require("cors");

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

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-1-17T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2022-1-17T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-1-17T19:20:14.298Z",
    important: true,
  },
];

App.get("/", (request, response) => {
  response.send("<h1>hello world there</h1>");
});

App.get("/notes", (request, response) => {
  response.json(notes);
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

App.listen("3001", () => {
  console.log("server listening on 3001");
});
