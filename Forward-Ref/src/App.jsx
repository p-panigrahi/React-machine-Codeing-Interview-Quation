import Child from "../../ForwordRef/src/Child";
import "./App.css";
import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const handelClick = () => {
    inputRef.current.value = "Aman";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Forward Ref</h1>
      <Child ref={inputRef} />
      <button onClick={handelClick}>Submit</button>
    </div>
  );
};

export default App;
