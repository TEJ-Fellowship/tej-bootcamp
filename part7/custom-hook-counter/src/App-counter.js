import useCounter from "./useCounter";

const App = (props) => {
  const counter = useCounter();
  const counterBottom = useCounter();

  return (
    <>
      <div>
        <h1>Top counter</h1>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>
      <div>
        <h1>Bottom counter</h1>
        <div>{counterBottom.value}</div>
        <button onClick={counterBottom.increase}>plus</button>
        <button onClick={counterBottom.decrease}>minus</button>
        <button onClick={counterBottom.zero}>zero</button>
      </div>
    </>
  );
};

export default App;
