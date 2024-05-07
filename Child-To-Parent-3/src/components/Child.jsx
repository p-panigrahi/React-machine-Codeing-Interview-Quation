import React from "react";

const Child = ({data,setData}) => {
  return <div>
    <h1> My parent is {data}</h1>
    <button onClick={()=>setData("Ranjan kumar Panigrahi")}>Change Parent</button>
  </div>;
};

export default Child;
