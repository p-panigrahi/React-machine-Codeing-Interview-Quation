import React, { useContext } from "react";
import { dataContex } from "./context/Context";
const Comp = () => {
  const result = useContext(dataContex);
  return <div>Comp - {result.count} </div>;
};

export default Comp;
