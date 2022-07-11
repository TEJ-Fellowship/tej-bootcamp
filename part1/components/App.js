import React from "react";
import Myh1 from "./Myh1";

const App = () => {
  let name1 = "Amir";

  return (
    <div>
      <Myh1 name={name1} lastName="some LastName1" />
      <Myh1 name="Niru" lastName="some LastName2" />
      <Myh1 name="Ashim" lastName="some LastName3" />
    </div>
  );
  // return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()])
};

export default App;
