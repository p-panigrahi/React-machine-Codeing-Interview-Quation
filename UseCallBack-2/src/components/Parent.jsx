import React from "react";
import Child from "./Child";
import { useState } from "react";
import { useCallback } from "react";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handelClick = () => {
    setCounter((prev) => prev + 1);
  };
  const sum = useCallback(() => {
    console.log("Sum of Two Number");
  }, [counter2]);
  console.log("Parent is Called");
  return (
    <div>
      <h2>I am Parent</h2>
      <Child counter={counter2} fn={sum} />
      {counter}
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
};

export default Parent;
