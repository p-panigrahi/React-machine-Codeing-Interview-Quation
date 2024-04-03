import React, { useState } from "react";
import Hoc from "./Hoc";
const B = ({ hnadelClick, count }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={hnadelClick}>B</button>
    </div>
  );
};

export default Hoc(B);