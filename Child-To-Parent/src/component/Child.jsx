import React from "react";

const Child = ({ setData }) => {
  return (
    <>
      <button onClick={() => setData("Aman")}>Change My Parent Name</button>
    </>
  );
};

export default Child;
