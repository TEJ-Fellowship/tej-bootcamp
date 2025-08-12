const Note = ({ note, updateNote }) => (
  <li className="note">
    {note.content}{" "}
    <button onClick={updateNote}>{String(note.important)}</button>
  </li>
);

export default Note;
