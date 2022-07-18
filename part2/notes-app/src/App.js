import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [note, setNote] = useState("Type a note");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    console.dir(event.target);
    const newNote = {
      id: notes.length + 1,
      content: note,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 ? true : false,
    };
    setNotes([...notes, newNote]);
    setNote("");
  };

  const handleOnChange = (event) => {
    setNote(event.target.value);
    console.log(note);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filterFunction = (note) => note.important === true;

  const filteredItems = notes.filter(filterFunction);

  const notesToShow = showAll ? notes : filteredItems;

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={toggleShowAll}>
        Show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={note} onChange={handleOnChange} />
        <button>Add note</button>
      </form>
    </div>
  );
};

export default App;
