import React from "react";
import Myh1 from "./Myh1";

const App = ({ counter }) => {
  let name1 = "Amir";

  return (
    <div>
      <h3>{counter}</h3>
      <Myh1 name={name1} lastName="some LastName1" count={counter} />
      <Myh1 name="Niru" lastName="some LastName2" count={counter} />
      <Myh1 name="Ashim" lastName="some LastName3" count={counter} />
    </div>
  );
  // return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()])
};

export default App;
