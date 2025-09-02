const Note = ({ note, updateNote }) => (
  <li className="note">
    Your awesome note: {note.content}{" "}
    <button onClick={updateNote}>{String(note.important)}</button>
  </li>
);

export default Note;
