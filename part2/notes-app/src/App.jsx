import Note from "./components/Note";
import { useState, useEffect } from "react";
import axios from "axios";
import notesServices from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("Type something..");
  const [showAll, setShowAll] = useState(true);

  useEffect(function () {
    notesServices.getAll().then((data) => {
      setNotes(data);
    });
  }, []);

  const showingNotes = showAll
    ? notes
    : notes.filter((note) => {
        return note.important === true;
      });

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("logging", event.target);
    const obj = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    notesServices.create(obj).then((data) => {
      setNotes(notes.concat(data));
    });
    // axios.post("http://localhost:3001/notes", obj).then((response) => {
    //   setNotes(notes.concat(response.data));
    // });
    setNewNote("");
  }

  function handleChange(event) {
    setNewNote(event.target.value);
  }

  function changeShowState() {
    setShowAll(!showAll);
  }

  function toggleImportant(id) {
    const currentNote = notes.find((note) => note.id === id);
    const currentNoteCopy = {
      ...currentNote,
      important: !currentNote.important,
    };

    notesServices
      .update(id, currentNoteCopy)
      .then((data) => {
        const updatedNotes = notes.map((note) =>
          note.id === id ? data : note
        );
        setNotes(updatedNotes);
      })
      .catch((error) => {
        console.log(error);
        alert(`the note with id ${id} does not exist`);
        setNotes(notes.filter((note) => note.id !== id));
      });

    // axios
    //   .put(`http://localhost:3001/notes/${id}`, currentNoteCopy)
    //   .then((response) => {
    //     const updatedNotes = notes.map((note) =>
    //       note.id !== id ? note : response.data
    //     );
    //     setNotes(updatedNotes);
    //   });
  }

  return (
    <div>
      <h1>My notes</h1>
      <button onClick={changeShowState}>
        Show {showAll ? "important" : "all"}{" "}
      </button>
      <ul>
        {showingNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            updateNote={() => {
              toggleImportant(note.id);
            }}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
