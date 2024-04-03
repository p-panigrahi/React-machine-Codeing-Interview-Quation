import React, { useState } from "react";
import Hoc from "./Hoc";
const A = ({ hnadelClick, count }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={hnadelClick}>A</button>
    </div>
  );
};

export default Hoc(A);
