import React, { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef(null);
  // const [data, setData] = useState(0);
  // const handelClick = () => {
  //   setData((data) => data + 1);
  //   setData((data) => data + 1);
  //   setData((data) => data + 1);
  //   setData((data) => data + 1);
  //   setData((data) => data + 1);
  const handelClick = () => {
    inputRef.current = inputRef.current + 1;
    console.log(inputRef.current);
  };
  return (
    <div>
      {inputRef.current}
      <button onClick={handelClick}>Submit</button>
    </div>
  );
};

export default App;
