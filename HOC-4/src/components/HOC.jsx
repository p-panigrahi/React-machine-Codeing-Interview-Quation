import { useState } from "react";

// const HOC = (WapperCom) => {
//   return () => {
//     const [counter, setCounter] = useState(0);
//     const handelCounter = () => {
//       setCounter((prev) => prev + 1);
//     };
//     return (
//       <div>
//         <WapperCom count={counter} fn={handelCounter} />
//       </div>
//     );
//   };
// };
// export default HOC;

const HOC = (WrapperCom) => {
  return () => {
    const [counter, setCounter] = useState(0);
    const handelCounter = () => {
      setCounter((prev) => prev + 1);
    };
    return (
      <div>
        <WrapperCom count={counter} fn={handelCounter} />
      </div>
    );
  };
};
export default HOC;
