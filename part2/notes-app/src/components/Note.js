const Note = ({ note, toggleImportance }) => {
  return (
    <>
      <li className="note">{note.content}</li>
      <button onClick={toggleImportance}>change importance</button>
    </>
  );
};

export default Note;
