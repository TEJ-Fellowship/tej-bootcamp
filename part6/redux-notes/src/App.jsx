import NewNote from "./components/NewNote";
// import "./App.css";
import { useState } from "react";
import Notes from "./components/Notes";

const App = () => {
  const [filter, setFilter] = useState("ALL");
  const filterSelected = (value) => {
    console.log(value);
    setFilter(value);
  };

  return (
    <div>
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => {
            filterSelected("ALL");
          }}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => {
            filterSelected("IMPORTANT");
          }}
        />
        not important
        <input
          type="radio"
          name="filter"
          onChange={() => {
            filterSelected("NOT_IMPORTANT");
          }}
        />
      </div>
      <NewNote />
      <Notes filter={filter} />
    </div>
  );
};

export default App;
