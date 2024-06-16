import React, { useMemo, useState } from "react";
import "./App.css";
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
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      <h1>Use Memo Hook Example</h1>
      <button onClick={handelCount1}>Count1-{count1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={handelCount2}>Count2-{count2}</button>
    </div>
  );
};

export default App;
