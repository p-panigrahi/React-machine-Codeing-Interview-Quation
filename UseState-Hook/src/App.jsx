import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handelCount = () => {
    setCount((prev)=>prev + 1);
    setCount((prev)=>prev + 1);
    setCount((prev)=>prev + 1);
    setCount((prev)=>prev + 1);
    setCount((prev)=>prev + 1);
    setCount((prev)=>prev + 1);
  };
  return (
    <div>
      <h1>Use State Example</h1>
      <br />
      <br />
      <br />
      <button onClick={handelCount}>CounterValue - {count}</button>
    </div>
  );
};

export default App;
