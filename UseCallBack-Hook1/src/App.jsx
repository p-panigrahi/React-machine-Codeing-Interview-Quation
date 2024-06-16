import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handelCount = () => {
    setCount((prev) => prev + 1);
  };
  const callme = useCallback(() => {
    console.log("I am Aman");
  }, [count1]);
  return (
    <div>
      <h1>Use CallBack Hook Example</h1>
      <Child counter={count1} fn={callme} />
      <button onClick={handelCount}>Count - {count}</button>
    </div>
  );
};

export default App;
