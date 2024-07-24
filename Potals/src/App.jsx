import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
const container = document.getElementById("modal");
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>Potals Example</h1>
      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>
      {open && <Modal/>}
    </div>
  );
};

export default App;

const Modal = () => {
  return ReactDOM.createPotal(
    <div>
      <h1>Hello World</h1>
    </div>,
    container
  );
};
