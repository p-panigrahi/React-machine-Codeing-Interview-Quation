import React, { useRef } from "react";
import Child from "./Child";
const App = () => {
  const inputRef = useRef(null);
  const handelClick = () => {
    inputRef.current.value = "Aman";
  };
  return (
    <div>
      <h1>Forward Ref Example</h1>
      <Child ref={inputRef} />
      <button onClick={handelClick}>Submit</button>
    </div>
  );
};

export default App;
