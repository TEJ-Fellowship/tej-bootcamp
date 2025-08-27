const Note = require("../model/note");
const notesRouter = require("express").Router();
const User = require("../model/user");

notesRouter.get("/", async (request, response, next) => {
  const result = await Note.find({}).populate("user", { username: 1, name: 1 });
  response.status(200).send(result);
});

notesRouter.post("/", async (request, response, next) => {
  const body = request.body;
  try {
    // if (!body.content) {
    //   return response.status(400).json({ error: "content missing" });
    // }

    const user = await User.findById(body.userId);

    if (!user) {
      return response
        .status(400)
        .json({ error: "userId missing or not valid" });
    }

    const note = new Note({
      content: body.content,
      important: body.important || false,
      user: user.id,
    });

    const savedNote = await note.save();

    user.notes = user.notes.concat(savedNote.id);
    await user.save();
    response.status(201).json(savedNote);
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
