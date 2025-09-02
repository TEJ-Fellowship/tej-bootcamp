import Note from "./components/Note";
import { useState, useEffect, useRef } from "react";
import notesServices from "./services/notes";
import loginServices from "./services/login";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NotesForm from "./components/NotesForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const noteFormRef = useRef();

  useEffect(function () {
    notesServices.getAll().then((data) => {
      setNotes(data);
    });
    const newUser = JSON.parse(window.localStorage.getItem("myAuth"));
    setUser(newUser);
    if (newUser && newUser.token) {
      notesServices.setToken(newUser.token);
    }
  }, []);

  const showingNotes = showAll
    ? notes
    : notes.filter((note) => {
        return note.important === true;
      });

  const createNote = (obj) => {
    noteFormRef.current.toggleVisibility();
    notesServices.create(obj).then((data) => {
      setNotes(notes.concat(data));
    });
  };

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

  const loginForm = () => {
    return (
      <>
        <Togglable buttonLabel="Login Toggle">
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      </>
    );
  };

  function notesForm() {
    return (
      <Togglable buttonLabel="new note" ref={noteFormRef}>
        <NotesForm createNote={createNote} />
      </Togglable>
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
