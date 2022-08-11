import { useState, useEffect, useRef } from "react";
import Note from "./components/Note";
import Footer from "./components/Footer";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import LoginForm from "./components/LoginForm";
import NoteForm from "./components/NoteForm";
import loginService from "./services/login";

const App = () => {
  const noteFormRef = useRef();
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
  const [showAll, setShowAll] = useState(true);
  const [message, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:3001/notes")
    noteService.getAll().then((data) => {
      setNotes(data);
      console.log("in useEffect: notes are ", notes);
      // console.log("in useEffect: note is ", note);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  const addNote = (noteObject) => {
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      noteFormRef.current.toggleVisibility();
    });
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filterFunction = (note) => note.important === true;

  const filteredItems = notes.filter(filterFunction);

  const notesToShow = showAll ? notes : filteredItems;

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      noteService.setToken(user.token);
      setUser(user);
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const loginForm = () => (
    <Togglable buttonLabel="Show me login">
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>
  );

  const noteForm = () => (
    <Togglable buttonLabel="create note" ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  );

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={message} />

      {/* {user === null ? loginForm() : noteForm()} */}
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged-in</p>
          {noteForm()}
        </div>
      )}

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
                })
                .catch(() => {
                  setErrorMessage("The note does not exist anymore");
                  setTimeout(() => setErrorMessage(null), 2000);
                  setNotes(notes.filter((x) => x.id !== note.id));
                });
            }}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default App;
