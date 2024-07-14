import React from "react";
import Child from "./Child";
const App = () => {
  return (
    <div>
      <h1>Parent_To_Child Data Flow Example</h1>
      <Child name="aman" />
    </div>
  );
};

export default App;
