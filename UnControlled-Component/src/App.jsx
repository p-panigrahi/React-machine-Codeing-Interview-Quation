import React, { useRef } from "react";
import "./App.css";
const App = () => {
  const inputRef = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
