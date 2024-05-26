import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handelClick}>Counter - {count}</button>
    </div>
  );
};

export default App;
