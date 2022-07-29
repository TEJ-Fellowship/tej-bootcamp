const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

console.log(process.env.MONGO);

const password = process.argv[2];

const url = `mongodb+srv://tejfellowship:${password}@cluster0.22duy.mongodb.net/MyNotes?retryWrites=true&w=majority`;

// const url =
//   "mongodb+srv://tejfellowship:password123@cluster0.22duy.mongodb.net/?retryWrites=true&w=majority";

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected");

    // const note = new Note({
    //   content: "JS is hard",
    //   date: new Date(),
    //   important: false,
    // });

    // return note.save();
    const notes = Note.find({ important: true });
    return notes;
  })
  .then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
