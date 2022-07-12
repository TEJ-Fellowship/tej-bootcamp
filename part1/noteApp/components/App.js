import React, { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";
import Myh1 from "./Myh1";

const App = () => {
  const [myCount, setMyCount] = useState(1);

  console.log("calling");
  const increaseCount = () => setMyCount(myCount + 1);

  return (
    <div>
      <h3>{myCount}</h3>
      <Display showValue={myCount} />
      <button onClick={increaseCount}>Click me in same component</button>
      <MyButton buttonHandler={increaseCount} />
      <Myh1 name="amir" lastName="some LastName1" count={myCount} />
      <Myh1 name="Niru" lastName="some LastName2" count={myCount} />
      <Myh1 name="Ashim" lastName="some LastName3" count={myCount} />
    </div>
  );
  // return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()])
};

export default App;
