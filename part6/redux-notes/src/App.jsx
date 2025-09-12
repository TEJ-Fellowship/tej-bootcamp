import NewNote from "./components/NewNote";
import VisibilityFilter from "./components/VisibilityFilter";
import Notes from "./components/Notes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAndAddAllNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // getAll().then((data) => dispatch(addAllNotes(data)));
    dispatch(getAndAddAllNotes());
  }, []);
  return (
    <div>
      <VisibilityFilter />
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
