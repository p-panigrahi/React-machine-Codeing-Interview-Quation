import React, { useContext } from "react";
import Comp1 from "./Comp1";
import { dataContext } from "../context/Context";
const Button = () => {
  const value = useContext(dataContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Comp1 />
        </span>
        Click Me
      </button>
    </div>
  );
};

export default Button;
