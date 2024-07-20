import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const handelClick1 = () => {
    inputRef.current = inputRef.current + 1;
    console.log(inputRef.current);
  };
  const handelClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <h1>Use Ref Hook Example</h1>
      <button onClick={handelClick}> Counter - {count}</button>
      {inputRef.current}
      <button onClick={handelClick1}>Ref Button</button>
    </div>
  );
};

export default App;
