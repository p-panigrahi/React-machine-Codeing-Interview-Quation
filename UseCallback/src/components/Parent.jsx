import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("Parent Render");
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const child = useCallback(() => {
    console.log("I am render");
  }, [count2]);
  return (
    <div>
      I am Parent {count}
      <button onClick={increment}>I am Parent</button>
      <br />
      <br />
      <br />
      <br />
      <Child count={count2} fn={child} />
    </div>
  );
};

export default Parent;
