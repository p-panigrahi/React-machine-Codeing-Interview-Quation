import { useState } from "react";

const HOC = (WapperCom) => {
  return () => {
    const [count, setCount] = useState(0);
    const handelCount = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <div>
        <WapperCom count={count} setCount={handelCount} />
      </div>
    );
  };
};
export default HOC;
