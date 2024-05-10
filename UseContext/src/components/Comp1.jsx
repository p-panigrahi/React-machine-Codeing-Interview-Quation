import React,{useContext} from "react";
import { dataContext } from "../context/Context.js";

const Comp1 = () => {
  const value = useContext(dataContext);
  return <div>I am component1 {value.count}</div>;
};

export default Comp1;
