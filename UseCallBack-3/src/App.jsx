import React from "react";
import Child from "./Child";
import { useState } from "react";
import { useCallback } from "react";

const App = () => {
  console.log("Parent Render");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handelClick = () => {
    setCounter1((prev) => prev + 1);
  };

  const getName = useCallback(() => {
    console.log("I am Aman");
  }, [counter2]);

  return (
    <div>
      <Child counter2={counter2} fn={getName} />
      <button onClick={handelClick}>Counter-1 = {counter1}</button>
    </div>
  );
};

export default App;
