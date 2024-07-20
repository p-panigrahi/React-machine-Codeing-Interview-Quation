import React, { useState, useMemo } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handelClick1 = () => {
    setCount1(count1 + 1);
  };
  const handelClick2 = () => {
    setCount2(count2 + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      <h1>Use Memo Hook Example</h1>
      <button onClick={handelClick1}>Counter 1 - {count1}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={handelClick2}>Counter 2 - {count2}</button>
    </div>
  );
};

export default App;
