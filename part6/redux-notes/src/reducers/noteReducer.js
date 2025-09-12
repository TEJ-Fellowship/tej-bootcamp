import { createSlice, current } from "@reduxjs/toolkit";
import { getAll, postNewNote } from "../services/notes";

//slice -> reducer , state , action -> object

// const initialState = [
//   { content: "reducer defines how state works", important: true, id: 1 },
//   { content: "state of store can contain any data", important: false, id: 2 },
// ];

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    // createNote(state, action) {
    //   console.log("createNote action:", action);
    //   console.log("createNote state:", current(state));
    //   const content = action.payload;
    //   return state.concat({
    //     content,
    //     important: false,
    //     id: generateId(),
    //   });
    // },
    addAllNotes(state, action) {
      return state.concat(action.payload);
    },
    toggleImportanceOf(state, action) {
      console.log("toggle action", action);
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
  },
});

export const { createNote, toggleImportanceOf, addAllNotes } =
  noteSlice.actions;

export const getAndAddAllNotes = () => {
  const getNotesFromAxiosAndDispatch = async (dispatch) => {
    const allNotes = await getAll();
    dispatch(addAllNotes(allNotes));
  };

  return getNotesFromAxiosAndDispatch;
};

export const addNewNoteWithThunk = (content) => {
  const addNoteToAxiosAndDispatch = async (dispatch) => {
    const newNote = await postNewNote(content);
    dispatch(noteSlice.actions.addAllNotes(newNote));
  };

  return addNoteToAxiosAndDispatch;
};

export default noteSlice.reducer;
