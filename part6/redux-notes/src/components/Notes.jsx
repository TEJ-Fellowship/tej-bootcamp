import React from "react";
import { toggleImportanceOf } from "../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";

const Notes = ({ filter }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => 
  filter === "ALL" ? state : 
  filter === "IMPORTANT" ? state.filter((note)=>note.important) :
  state.filter((note)=>!note.important)
  );
  
  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => {
            dispatch(toggleImportanceOf(note.id));
          }}
        >
          {note.content}{" "}
          <strong>{note.important ? "important" : "not important"}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
