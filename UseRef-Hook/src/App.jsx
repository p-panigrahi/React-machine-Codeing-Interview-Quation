import React, { useRef, useState } from "react";

const App = () => {
  const [data, setData] = useState(0);
  const refValue = useRef(0);
  const handelState = () => {
    setData(data + 1);
    console.log(data);
  };
  const handelRef = () => {
    refValue.current = refValue.current + 1;
    console.log(refValue.current);
  };
  return (
    <div>
      <h1>Use Ref Hook Example</h1>
      <h1>State - {data}</h1>
      <h1>Ref - {refValue.current}</h1>
      <button onClick={handelState}>State Inc</button>
      <button onClick={handelRef}>Ref Inc</button>
    </div>
  );
};

export default App;
