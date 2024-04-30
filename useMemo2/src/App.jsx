import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handelClick1 = () => {
    setCounter1(counter1 + 1);
  };
  const handelClick2 = () => {
    setCounter2(counter2 + 1);
  };
  const isEven = useMemo(() => {
    console.log("...........");
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  },[counter1]);

  return (
    <div>
      <button onClick={handelClick1}>Counter1 - {counter1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={handelClick2}>Counter2 - {counter2}</button>
    </div>
  );
};

export default App;
