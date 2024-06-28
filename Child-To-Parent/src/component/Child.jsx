import React from "react";

const Child = ({ setFn }) => {
  return (
    <div>
      <h1>Hello I am Child</h1>
      <button onClick={() => setFn("Ranjan Kumar Panigrahi")}>
        lick Me To Update Parent Data
      </button>
    </div>
  );
};

export default Child;
