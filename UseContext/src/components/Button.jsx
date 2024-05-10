import React, { useContext } from "react";
import { dataContext } from "../context/Context.js";
import Comp1 from "./Comp1";

const Button = () => {
  const value = useContext(dataContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Comp1 />
        </span>
        I am Button
      </button>
    </div>
  );
};

export default Button;
