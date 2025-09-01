import Note from "./components/Note";
import { useState, useEffect } from "react";
import notesServices from "./services/notes";
import loginServices from "./services/login";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("Type something..");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(function () {
    notesServices.getAll().then((data) => {
      setNotes(data);
    });
    setUser(JSON.parse(window.localStorage.getItem("myAuth")));
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
        // alert(`the note with id ${id} does not exist`);
        setErrorMessage(`the note with id ${id} does not exist`);
        setTimeout(() => setErrorMessage(null), 5000);
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

  async function handleLogin(event) {
    event.preventDefault();
    let myUser = await loginServices.login({ username, password });
    setUser(myUser);
    notesServices.setToken(myUser.token);
    window.localStorage.setItem("myAuth", JSON.stringify(myUser));
  }

  function loginForm() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              username
              <input
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              password
              <input
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
          </div>
          <button type="submit">login</button>
        </form>
      </>
    );
  }

  function notesForm() {
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={newNote}
          onChange={handleChange}
          onClick={() => setNewNote("")}
        />
        <button>submit</button>
      </form>
    );
  }

  return (
    <div>
      <h1>My notes</h1>
      <Notification message={errorMessage} />

      {!user && loginForm()}
      {user && (
        <div>
          <p>{user.name} logged in</p>
          {notesForm()}
        </div>
      )}

      <br />
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

      <Footer />
    </div>
  );
}

export default App;
