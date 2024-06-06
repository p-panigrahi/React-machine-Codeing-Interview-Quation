import React from "react";

const Child = ({ setValue }) => {
  return (
    <div>
      I am Child
      <button onClick={() => setValue("Ranjan Kumar")}>Click Add Name</button>
    </div>
  );
};

export default Child;
