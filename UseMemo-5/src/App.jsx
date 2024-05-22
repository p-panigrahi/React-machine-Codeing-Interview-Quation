import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handelCount1 = () => {
    setCount1((prev) => prev + 1);
  };
  const handelCount2 = () => {
    setCount2((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <button onClick={handelCount1}>Counter-1 {count1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={handelCount2}>Counter-2 {count2}</button>
    </div>
  );
};

export default App;
