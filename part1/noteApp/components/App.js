import React, { useState } from "react";
import Myh1 from "./Myh1";

const App = () => {
  const [myCount, setMyCount] = useState(1);

  setTimeout(() => {
    setMyCount(myCount + 1);
  }, 1000);

  console.log("calling");

  return (
    <div>
      <h3>{myCount}</h3>
      <Myh1 name="amir" lastName="some LastName1" count={myCount} />
      <Myh1 name="Niru" lastName="some LastName2" count={myCount} />
      <Myh1 name="Ashim" lastName="some LastName3" count={myCount} />
    </div>
  );
  // return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()])
};

export default App;
