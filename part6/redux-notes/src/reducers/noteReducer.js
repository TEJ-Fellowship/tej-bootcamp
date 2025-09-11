const initialState = [
  { content: "reducer defines how state works", important: true, id: 1 },
  { content: "state of store can contain any data", important: false, id: 2 },
];

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteReducer = (state = initialState, action) => {
  if (action.type === "NEW_NOTE") {
    // state.push(action.payload);
    let newState = [...state, action.payload];
    return newState;
  }
  if (action.type === "TOGGLE_IMPORTANCE") {
    let myState = state.find((note) => note.id === action.payload.id);
    let myUpdatedState = { ...myState, important: !myState.important };
    let newState = state.map((note) =>
      note.id === myUpdatedState.id ? myUpdatedState : note
    );
    return newState;
  }

  return state;
};

//action creator
export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: {
      id,
    },
  };
};

export default noteReducer;
