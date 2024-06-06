import { useState } from "react";

const HOC = (WrapperComp) => {
  return () => {
    const [data, setData] = useState(0);

    const handelClick = () => {
      setData(data + 1);
    };
    return <WrapperComp data={data} handelClick={handelClick} />;
  };
};

export default HOC;
