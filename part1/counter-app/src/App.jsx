import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(1);

  setTimeout(() => {
    setCounter(counter + 1);
    console.log(counter);
  }, 1000);

  return <div>{counter}</div>;
};

export default App;
