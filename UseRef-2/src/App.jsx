import React, { useRef, useState } from "react";

const App = () => {
  const [count,setCount] = useState(0);
  const inputRef = useRef(0);
  // const handelRef = () => {
  //   inputRef.current = inputRef.current + 1;
  //   console.log(inputRef.current);
  // };
  const handelRef = () => {
   setCount(count + 1);
  };
  console.log("Render");
  return (
    <div>
      {count}
      <button onClick={handelRef}>Ref</button>
    </div>
  );
};

export default App;
