import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const substractValue = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={substractValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
