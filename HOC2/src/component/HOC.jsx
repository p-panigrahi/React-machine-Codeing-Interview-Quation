import { useState } from "react";

const HOC = (WarpperCom) => {
  return (name) => {
    const [counter, setCounter] = useState(0);
    const handelClick = () => {
      setCounter(counter + 1);
    };
    return (
      <div>
        <WarpperCom handelClick={handelClick} data={counter} {...name}/>
      </div>
    );
  };
};
export default HOC;
