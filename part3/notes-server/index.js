const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

//-------------------------------Copy start

const url = `mongodb+srv://sanjeev418rai:password12345@cluster0.9ihbd46.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url);

//--------------------------------------

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "JS is not so easy.",
//   important: false,
// });

// note.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });

// Note.findById("68a5a4eedbd1465af20f4274").then((result) => {
//   console.log(result);
//   mongoose.connection.close();
// });

//------------------------------------

let notes = [];

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

app.get("/api/notes", (request, response) => {
  Note.find({}).then((result) => {
    response.status(200).send(result);
  });
});

app.get("/api/notes/:noteid", (request, response) => {
  const myId = request.params.noteid;
  const myNote = notes.find((note) => note.id === myId);

  if (myNote) {
    response.json(myNote);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:noteid", (request, response) => {
  const myId = request.params.noteid;
  notes = notes.filter((note) => note.id !== myId);

  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const note = request.body;
  note.id = String(notes.length + 1);
  if (!note.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  console.log("our note is", note);
  const myNote = {
    content: note.content,
    important: note.important || false,
    id: String(notes.length + 1),
  };
  notes.push(myNote);
  response.status(201).json(myNote);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT ? process.env.PORT : 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
