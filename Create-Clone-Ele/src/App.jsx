import React from "react";

const App = () => {
  let element = React.createElement(
    "div",
    { className: "container" },
    "Hello World"
  );
  return React.cloneElement(element, { className: "Boss" });
};

export default App;
