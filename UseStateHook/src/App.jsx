import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(() => count + 1);
  };
  return (
    <div>
      <h1>UseSateHook Example</h1>
      <button onClick={handelClick}>Counter - {count}</button>
    </div>
  );
};

export default App;
