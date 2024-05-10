import React, { useState } from "react";

const App = () => {
  const [counter , setCounter] = useState(0)
  const getDisplay = ()=>{
    setCounter((prev)=>prev + 1);
    setCounter((prev)=>prev + 1);
    setCounter((prev)=>prev + 1);
    setCounter((prev)=>prev + 1);
    console.log(counter);
  }
  return <div>
    <h1>Counter - {counter}</h1>
    <button onClick={getDisplay}>Click Me</button>
  </div>;
};

export default App;
