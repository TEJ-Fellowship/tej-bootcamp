const react = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(react);

const SayHello = (props) => {
  return React.createElement(
    "p",
    { class: "anjanaClass" },
    `Hello ${props.name}`
  );
};

const App = () => {
  const myDiv = React.createElement("div", {}, [
    React.createElement("h1", { class: "anjanaClass" }, "Hello world"),

    React.createElement(SayHello, { name: "Anu" }),
    React.createElement(SayHello, { name: "Mahesh" }),
    React.createElement(SayHello, { name: "Manoj" }),
  ]);

  return myDiv;
};

reactRoot.render(React.createElement(App));
