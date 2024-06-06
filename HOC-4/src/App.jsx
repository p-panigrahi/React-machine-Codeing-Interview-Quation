import React from "react";
import Parent from "./components/Parent";
import Child from "./components/Child";

const App = () => {
  return (
    <div>
      <h1>I am Parent</h1>
      <Parent />
      <br />
      <br />
      <br />
      <br />
      <Child />
    </div>
  );
};

export default App;
