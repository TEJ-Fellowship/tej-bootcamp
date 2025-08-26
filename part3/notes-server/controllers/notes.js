const Note = require("../model/note");
const notesRouter = require("express").Router();

notesRouter.get("/", async (request, response, next) => {
  const result = await Note.find({});
  response.status(200).send(result);
});

notesRouter.post("/", async (request, response, next) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  try {
    const result = await note.save();

    response.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

notesRouter.get("/:noteid", async (request, response, next) => {
  const id = request.params.noteid;

  const note = await Note.findById(id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

notesRouter.delete("/:noteid", (request, response) => {
  const id = request.params.noteid;

  const deletedNote = Note.findByIdAndDelete(id);

  deletedNote.then(() => {
    response.status(200).send(`The note with id ${id} successfully deleted`);
  });
});

module.exports = notesRouter;
