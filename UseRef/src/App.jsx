import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("Use State us render");
  const inputRef = useRef(0);
  const handelRef = ()=>{
    inputRef.current  = inputRef.current + 1;
    console.log(inputRef.current)
  }
  return (
    <div>
      {inputRef.current}
      <button onClick={handelRef}>Click Me</button>
    </div>
  );
};

export default App;
