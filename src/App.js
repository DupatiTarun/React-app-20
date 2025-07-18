// toggole increment of count
import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [initial, setInitial] = useState(0);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);
  const incrementHandler = () => {
    console.log("increamentHandler");
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("useEffect Call");
    setCount(parseInt(initial));
  }, [initial]);
  const inputChangeHandler = (e) => {
    setInitial(e.target.value);
  };
  return (
    <div className={theme ? "black" : "blue"}>
      <div onClick={() => setTheme(!theme)}>Toggle Theme</div>
      <input type="number" onChange={(e) => inputChangeHandler(e)} />
      <h1>count:{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default App;
