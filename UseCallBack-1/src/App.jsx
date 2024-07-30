import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  console.log("Parent is calling");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handelCount = () => {
    setCount1(count1 + 1);
  };
  const callMe = useCallback(() => {
    console.log("Call Me in Child");
  }, [count2]);
  return (
    <div>
      <Child fn={callMe} count2={count2} />
      <button onClick={handelCount}>Counter1 = {count1}</button>
    </div>
  );
};

export default App;
