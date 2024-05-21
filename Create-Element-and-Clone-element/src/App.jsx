import React, { cloneElement, createElement } from "react";

const App = () => {
  let element = createElement("div", { className: "Container" }, "Hello World");
  return cloneElement(element, { className: "BigContainer" });
};

export default App;
