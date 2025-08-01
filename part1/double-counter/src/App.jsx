import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [counter, setCounter] = useState({ left: 0, right: 0 });
  const [clickHistory, setClickHistory] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);

  function leftClick() {
    // console.log("counter before adding value", counter);
    // counter.left = counter.left + 1;
    let newCounter = { ...counter };
    newCounter.left = newCounter.left + 1;
    setCounter(newCounter);
    setClickHistory([...clickHistory, "L"]);
    setTotalClicks(totalClicks + 1);

    // console.log("counter after adding value", counter);
  }

  function rightClick() {
    console.log("counter before setCounter", counter);
    setCounter({ ...counter, right: counter.right + 1 });
    console.log("counter after setCounter", counter);

    setClickHistory([...clickHistory, "R"]);
    setTotalClicks(totalClicks + 1);
  }

  return (
    <>
      <div>
        {counter.left}
        <Button onClickFunc={leftClick} label="left count" />
        <Button label="right count" onClickFunc={rightClick} />
        {counter.right}
      </div>
      <div>The history of clicks is {clickHistory.join("-")}</div>
      {/* <div>The total clicks are {totalClicks}</div> */}
      <Display total={totalClicks} />
    </>
  );
}

export default App;
