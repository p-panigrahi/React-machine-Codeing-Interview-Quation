import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const count1Increese = () => {
    setCount1((prev) => prev + 1);
  };
  const count2Increese = () => {
    setCount2((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    console.warn("................");
    let i = 0;
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  },[count1]);

  return (
    <div>
      <button onClick={count1Increese}>Counter1-{count1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={count2Increese}>Counter2-{count2}</button>
    </div>
  );
};

export default App;
