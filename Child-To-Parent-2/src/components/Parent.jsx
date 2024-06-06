import React from "react";
import Child from "./Child";

const Parent = ({ data, setData }) => {
  return (
    <div>
      I am {data}
      <Child setValue={setData} />
    </div>
  );
};

export default Parent;
