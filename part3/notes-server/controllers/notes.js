const Note = require("../model/note");
const notesRouter = require("express").Router();

notesRouter.get("/", (request, response, next) => {
  Note.find({})
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => next(error));
});

notesRouter.post("/", (request, response, next) => {
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
    .then((savedNote) => {
      response.json(savedNote);
    })
    .catch((error) => next(error));
});

notesRouter.get("/:noteid", (request, response, next) => {
  const id = request.params.noteid;

  Note.findById(id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log("error happening", error);
      next(error);
    });
});

notesRouter.delete("/:noteid", (request, response) => {
  const id = request.params.noteid;

  const deletedNote = Note.findByIdAndDelete(id);

  deletedNote.then(() => {
    response.status(200).send(`The note with id ${id} successfully deleted`);
  });
});

module.exports = notesRouter;
