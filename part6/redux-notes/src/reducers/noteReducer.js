import { createSlice, current } from "@reduxjs/toolkit";

//slice -> reducer , state , action -> object

const initialState = [
  { content: "reducer defines how state works", important: true, id: 1 },
  { content: "state of store can contain any data", important: false, id: 2 },
];

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action) {
      console.log("createNote action:", action);
      console.log("createNote state:", current(state));
      const content = action.payload;
      state.concat({
        content,
        important: false,
        id: generateId(),
      });
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

export const { createNote, toggleImportanceOf } = noteSlice.actions;
export default noteSlice.reducer;
