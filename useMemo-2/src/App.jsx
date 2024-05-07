import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementOne = () => {
    setCounter1(counter1 + 1);
  };
  const incrementTwo = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  },[counter1]);


  return (
    <div>
      <h1>UseMemo Example</h1>
      <button onClick={incrementOne}>Counter1 - {counter1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>Counter2 - {counter2}</button>
    </div>
  );
};

export default App;
