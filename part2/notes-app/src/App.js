import { useState, useEffect } from "react";
import Note from "./components/Note";
import Footer from "./components/Footer";
import axios from "axios";
import noteService from "./services/notes";
import Notification from "./components/Notification";

const App = () => {
  //1. we need to get data from server
  // 2. const [notes, setNotes] = useState( this source will be the data we get from server);

  /**
   * Things we need to setup
   * 1. backend server: will create fake backend server
   * 2. in the frontend code, read the data from backend server
   *  2.1 npm library that provides technology to call backend server
   *  2.2 where and how to call this library from React code
   */

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("Type a note");
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:3001/notes")
    noteService.getAll().then((data) => {
      setNotes(data);
      console.log("in useEffect: notes are ", notes);
      // console.log("in useEffect: note is ", note);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    console.dir(event.target);
    const newNote = {
      // id: notes.length + 1,
      content: note,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 ? true : false,
    };

    // axios.post("http://localhost:3001/notes", newNote)
    noteService.create(newNote).then((result) => {
      // console.log(data);
      setNotes([...notes, result]);
      setNote("");
    });
  };

  const handleOnChange = (event) => {
    setNote(event.target.value);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filterFunction = (note) => note.important === true;

  const filteredItems = notes.filter(filterFunction);

  const notesToShow = showAll ? notes : filteredItems;

  // console.log("line 56: notes has", notes);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={message} />
      <button onClick={toggleShowAll}>
        Show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => {
              console.log(
                `button is clicked by function passed from App for id ${note.id}`
              );
              //1. make new object from current note with toggled important field
              const updatedNote = { ...note, important: !note.important };
              //2. update backend server with the updated object
              // axios.put(`http://localhost:3001/notes/${note.id}`, updatedNote)
              noteService
                .update(note.id, updatedNote)
                .then((data) => {
                  // console.log(data);
                  //3. now, also update the frontend state with the updated note
                  setNotes(notes.map((x) => (x.id !== note.id ? x : data)));
                  setNote("");
                })
                .catch((error) => {
                  setMessage("The note does not exist anymore");
                  setTimeout(() => setMessage(null), 2000);
                  setNotes(notes.filter((x) => x.id !== note.id));
                });
            }}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={note} onChange={handleOnChange} />
        <button>Add note</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
