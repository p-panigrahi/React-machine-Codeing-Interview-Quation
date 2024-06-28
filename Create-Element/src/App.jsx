import React from "react";

const App = () => {
  let element = React.createElement(
    "div",
    { className: "Container" },
    "Hello Aman"
  );
  return React.cloneElement(element, { className: "Boos" });
};

export default App;
