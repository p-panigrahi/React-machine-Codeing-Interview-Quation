import React from "react";

const Child = ({setData}) => {
  return (
    <div>
      <h1>I am Child</h1>
      <button onClick={()=>setData("Ranjan kumar panigrahi")}>Change</button>
    </div>
  );
};

export default Child;
