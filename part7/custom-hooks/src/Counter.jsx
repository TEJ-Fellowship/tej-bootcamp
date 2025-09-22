import useCounter from "./hooks/useCounter";

const Counter = () => {
  const count = useCounter(0);
  const count2 = useCounter(0);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>{count.counter}</div>
        <button onClick={count.handleMinus}>minus</button>
        <button onClick={count.handleReset}>zero</button>
        <button onClick={count.handlePlus}>plus</button>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <div>
        <div>{count2.counter}</div>
        <button onClick={count2.handleMinus}>minus</button>
        <button onClick={count2.handleReset}>zero</button>
        <button onClick={count2.handlePlus}>plus</button>
      </div>
    </div>
  );
};

export default Counter;
