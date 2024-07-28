import React, { createElement } from "react";

const App = () => {
  const element = React.createElement(
    "div",
    { className: "container" },
    "Hello World"
  );
  return React.cloneElement(element, { className: "Boss" });
};

export default App;
