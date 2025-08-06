import Note from "./components/Note";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("Type something..");
  const [showAll, setShowAll] = useState(true);

  useEffect(function () {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
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
      id: notes[notes.length - 1].id + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(obj));
    setNewNote("");
  }

  function handleChange(event) {
    setNewNote(event.target.value);
  }

  function changeShowState() {
    setShowAll(!showAll);
  }

  return (
    <div>
      <h1>My notes</h1>
      <button onClick={changeShowState}>
        Show {showAll ? "important" : "all"}{" "}
      </button>
      <ul>
        {showingNotes.map((note) => (
          <Note key={note.id} note={note} />
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
