const express = require("express");
const cors = require("cors");

const App = express();
App.use(cors());

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

App.listen("3001", () => {
  console.log("server listening on 3001");
});
