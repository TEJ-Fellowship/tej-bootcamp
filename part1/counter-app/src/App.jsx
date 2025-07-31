import Display from "./Display";
import { useState } from "react";
import Button from "./Button";

let counterRegular = 1;
function App() {
  // let myState = useState(1)
  // let counter = myState[0]
  // let setCounter = myState[1]
  const [counter, setCounter] = useState(1);

  function clickMe() {
    // setCounter((val) => {
    //   return val + 1;
    // });
    setCounter(counter + 1);
    counterRegular = counterRegular + 1;
    let myDiv2 = document.getElementById("myDiv2");
    // counter = counter + 1;
    myDiv2.innerText = `The counterRegular in myDiv2 is at ${counterRegular}`;
    // console.log(`counter is at ${counter}`);
  }

  return (
    <>
      <div id="myDiv">The counter in myDiv is at {counter}</div>
      <Button onClickFunc={clickMe} label="Increase count" />
      <Button
        onClickFunc={() => {
          setCounter(counter - 1);
        }}
        label="Decrease count"
      />
      <Button
        label="reset"
        onClickFunc={() => {
          setCounter(0);
        }}
      />
      <div id="myDiv2">The counterRegular in myDiv2 is at {counterRegular}</div>
      <Display counter={counter} />
    </>
  );
}

export default App;
