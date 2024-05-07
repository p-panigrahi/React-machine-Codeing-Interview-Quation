import { useState } from "react";

const HOC = (WarrperCom) => {
  return () => {
    const [counter, setCounter] = useState(0);
    const handelClick = () => {
      setCounter(counter + 1);
    };
    return (
      <div>
        <WarrperCom count={counter} handelClick={handelClick} />
      </div>
    );
  };
};
export default HOC;
