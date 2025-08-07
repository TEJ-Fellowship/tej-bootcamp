const Note = ({ note, updateNote }) => (
  <li>
    {note.content}{" "}
    <button onClick={updateNote}>{String(note.important)}</button>
  </li>
);

export default Note;
