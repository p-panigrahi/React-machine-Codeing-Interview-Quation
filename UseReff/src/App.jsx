import React, { useRef, useState } from "react";

const App = () => {
  const [data, setData] = useState(0);
  // const inputRef = useRef(0);
  // const handelClick = () => {
  //   inputRef.current = inputRef.current + 1;
  //   console.log(inputRef.current);
  // };
  const handelClick = () => {
    setData((prev) => prev + 1);
  };
  return (
    <div>
      {data}
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
};

export default App;
