import ReactDOM from "react-dom/client";
import App from "./components/App";

let myCount = 1;

const refresh = () => {
  ReactDOM.createRoot(document.querySelector("#root")).render(
    <App counter={myCount} />
  );
};

setInterval(() => {
  refresh();
  myCount++;
}, 1000);
