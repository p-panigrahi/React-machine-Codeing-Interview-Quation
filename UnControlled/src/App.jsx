import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>UnCrontrolled Component</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
