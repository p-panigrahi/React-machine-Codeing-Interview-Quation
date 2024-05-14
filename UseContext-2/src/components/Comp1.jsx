import React, { useContext } from "react";
import { dataContext } from "../context/Context";
const Comp1 = () => {
  const newData = useContext(dataContext);
  return <div>{newData.count}I am Component</div>;
};

export default Comp1;
