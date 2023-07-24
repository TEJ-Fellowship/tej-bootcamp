import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((value) => {
          return <Note key={value.id} note={value} />;
        })}
      </ul>
    </>
  );
};

export default App;
