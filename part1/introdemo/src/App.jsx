import SayHello from "./SayHello";

const App = () => {
  // const myDiv = React.createElement("div", {}, [
  //   React.createElement("h1", { class: "anjanaClass" }, "Hello world"),

  //   React.createElement(SayHello, { name: "Anu" }),
  //   React.createElement(SayHello, { name: "Mahesh" }),
  //   React.createElement(SayHello, { name: "Manoj" }),
  // ]);

  // return myDiv;
  return (
    <>
      <h1 className="anjanaClass">Hello world</h1>,
      <SayHello name="Anu" />,
      <SayHello name="Mahesh" />,
      <SayHello name="Manoj" />,
    </>
  );
};

export default App;
