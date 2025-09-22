import { useEffect, useState } from "react";

const useCounter = (initialvalue = 0) => {
  const [counter, setCounter] = useState(initialvalue);

  useEffect(() => {
    console.log("This is useCounter");
  }, []);

  const handleMinus = () => {
    setCounter(counter - 1);
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return {
    counter,
    handleMinus,
    handlePlus,
    handleReset,
  };
};

export default useCounter;
