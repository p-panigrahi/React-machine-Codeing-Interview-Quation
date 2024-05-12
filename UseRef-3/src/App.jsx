import React, { useRef, useState } from "react";

const App = () => {
  const [data, setData] = useState(0);
  const reef = useRef(0);
  // const handelClick = () => {
  //   reef.current = reef.current + 1;
  //   console.log(reef.current);
  // };
  const handelClick = () => {
    setData((prev) => prev + 1);
  };
  console.log("State Render");
  return (
    <div>
      {data}
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
};

export default App;
