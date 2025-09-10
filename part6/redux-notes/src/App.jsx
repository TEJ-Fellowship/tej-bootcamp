import NewNote from "./components/NewNote";
// import "./App.css";
import { useDispatch } from "react-redux";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
