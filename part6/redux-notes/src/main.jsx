import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
import App from "./App";

export const store = createStore(noteReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// let myRoot = createRoot(document.getElementById("root"));

// function myRender() {
//   myRoot.render(<App />);
// }

// myRender();

// store.subscribe(myRender);
