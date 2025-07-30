import SayHello from "./SayHello";

const App = () => {
  // const myDiv = React.createElement("div", {}, [
  //   React.createElement("h1", { class: "anjanaClass" }, "Hello world"),

  //   React.createElement(SayHello, { name: "Anu" }),
  //   React.createElement(SayHello, { name: "Mahesh" }),
  //   React.createElement(SayHello, { name: "Manoj" }),
  // ]);

  let persons = [
    { firstName: "Anu", lastName: "Magar", id: 201 },
    { firstName: "Mahesh", lastName: "Chaudhary", id: 250 },
    { firstName: "Manoj", lastName: "Rai", id: 275 },
  ];

  // return myDiv;
  return (
    <>
      <h1 className="anjanaClass">Hello world</h1>
      {/* {condition ? ():()} */}
      {persons.length > 0 ? (
        persons
          .filter((element) => element.id > 205)
          .map((person) => <SayHello person={person} key={person.id} />)
      ) : (
        <p>There are no people</p>
      )}
    </>
  );
};

export default App;
