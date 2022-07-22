const Note = ({ note, toggleImportance }) => {
  return (
    <li>
      {note.content} ({note.important.toString()}){" "}
      <button onClick={toggleImportance}>change importance</button>
    </li>
  );
};

export default Note;
