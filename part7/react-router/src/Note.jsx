const Note = ({ note }) => {
  // const id = useParams().id;
  // console.log("the id is", id);
  // const myNote = notes.find((note) => note.id == id);

  return (
    <div>
      <h2>Single Note</h2>
      <div>{note.content}</div>
    </div>
  );
};
export default Note;
