import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
const container = document.getElementById("modle");
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>Potal Example</h1>
      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>
      {open && <Modle />}
    </div>
  );
};

export default App;

const Modle = () => {
  return createPortal(
    <div>
      <h1>Hello World</h1>
    </div>,
    container
  );
};
