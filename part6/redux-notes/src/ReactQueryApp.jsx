import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getAll, createNote, updateNote } from "./services/result";

const App = () => {
  const queryClient = useQueryClient();
  // get All notes
  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getAll,
    refetchOnWindowFocus: false,
  });

  // create new note mutation
  const newNoteMutation = useMutation({
    mutationFn: createNote, //post request
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(["notes"]);
      queryClient.setQueryData(["notes"], notes.concat(newNote));
    },
  });

  // update note mutation
  const updateNoteMutation = useMutation({
    mutationFn: updateNote, //put request
    onSuccess: () => {
      queryClient.invalidateQueries("notes"); //get all request
    },
  });

  console.log(result);

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    console.log(content);
    newNoteMutation.mutate({ content, important: true });
  };

  const toggleImportance = (note) => {
    console.log("toggle importance of", note.id);
    updateNoteMutation.mutate({ ...note, important: !note.important });
  };

  const notes = result.data;

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : "non-important"}</strong>
        </li>
      ))}
    </div>
  );
};

export default App;
