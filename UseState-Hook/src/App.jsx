import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Use State Hook Example</h1>
      <button onClick={handelClick}>Increace - {count}</button>
    </div>
  );
};

export default App;
