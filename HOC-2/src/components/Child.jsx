import React, { useState } from "react";
import HOC from "./HOC";

const Child = ({ count, setCount }) => {
  return (
    <div>
      <h1>I am Child</h1>
      <button onClick={setCount}>
        Clicke Me To Start Your Counter Child - {count}
      </button>
    </div>
  );
};

export default HOC(Child);
