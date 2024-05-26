import React, { useContext } from "react";
import Comp from "./Comp";
import { dataContex } from "./context/Context";
const Button = () => {
  const result = useContext(dataContex);
  return (
    <div>
      <button onClick={() => result.setCount((prev) => prev + 1)}>
        <span>
          <Comp />
        </span>
      </button>
    </div>
  );
};

export default Button;
