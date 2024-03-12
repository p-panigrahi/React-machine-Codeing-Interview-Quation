import React from "react";
import { useState } from "react";

const HOC = (WarappedComp) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const handelClick = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WarappedComp handelClick={handelClick} count={count} {...props} />
      </div>
    );
  };
};

export default HOC;
