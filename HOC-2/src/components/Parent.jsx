import React, { useState } from "react";
import HOC from "./HOC";

const Child = ({ count, setCount }) => {
  return (
    <div>
      <h1>I am Parent</h1>
      <button onClick={setCount}>
        Clicke Me To Start Your Counter Parent - {count}
      </button>
    </div>
  );
};

export default HOC(Parent);
