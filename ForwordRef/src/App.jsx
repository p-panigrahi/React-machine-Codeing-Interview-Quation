import React, { useRef } from "react";
import Child from "./Child";

const App = () => {
  const inputRef = useRef(null);
  const handelClick = () => {
    inputRef.current.value = "Aman";
    inputRef.current.style.color = "red";
    inputRef.current?.focus();
  };
  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handelClick}>Update Clicke Me</button>
    </div>
  );
};

export default App;
