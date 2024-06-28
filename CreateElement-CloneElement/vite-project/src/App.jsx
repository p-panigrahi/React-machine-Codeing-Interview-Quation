import React from "react";

const App = () => {
  let element = React.cloneElement(
    "div",
    { className: "Container" },
    "Hello Woralds"
  );
  return element;
};

export default App;
