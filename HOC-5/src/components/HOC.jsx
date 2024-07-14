import { useState } from "react";

const HOC = (WarrperCom) => {
  return () => {
    const [counter, setCounter] = useState(0);
    const handelCounter = () => {
      setCounter(() => counter + 1);
    };
    return (
      <div>
        <WarrperCom count={counter} fn={handelCounter} />
      </div>
    );
  };
};
export default HOC;
