const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://sanjeev418rai:${password}@cluster0.zjezhwt.mongodb.net/noteDatabase?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

// Crating schema and Save part
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

//----------------------------------------

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});

// const note = new Note({
//   content: "What is the meaning of Life?",
//   important: false,
// });

// note.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });

// const saveNote = async () => {
//   const savedData = await note.save();
//   console.log("Note Saved!");
//   mongoose.connection.close();
// };

// saveNote();
