import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(noteReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);