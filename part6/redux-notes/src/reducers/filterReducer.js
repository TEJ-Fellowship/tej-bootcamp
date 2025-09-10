const filterReducer = (state, action) => {
  if (action.type === "SET_FILTER") return action.payload;
  return state;
};

export const filterChange = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export default filterReducer;
