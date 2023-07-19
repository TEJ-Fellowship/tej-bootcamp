import SayHello from "./SayHello";

let App = () => {
  let peopleArray = [
    { firstName: "Akash", lastName: "Sunar", id: 201 },
    { firstName: "Sushil", lastName: "Thanet", id: 301 },
    { firstName: "Hemlal", lastName: "Dulal", id: 401 },
  ];
  return peopleArray
    .filter((person) => person.id > 250)
    .map((value) => <SayHello person={value} key={value.id} />);
};

export default App;
