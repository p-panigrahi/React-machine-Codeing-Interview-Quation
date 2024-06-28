// import React, { useEffect, useRef, useState } from "react";
// import { FaSearchengin } from "react-icons/fa";
// const App = () => {
//   const [showInput,setShowInput] = useState(false);
//   const inpuRef = useRef(null);
//   useEffect(()=>{
//     inpuRef.current?.focus();
//   },[showInput]);
//   return (
//     <div>
//       <FaSearchengin onClick={()=>setShowInput(!showInput)}/>
//       <br/>
//       <br/>
//       {showInput && <input text="text" ref={inpuRef}/>}
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
const App = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [showInput]);
  return (
    <div>
      <h1>Use Ref Auto Focus</h1>
      <FaSearchengin onClick={() => setShowInput(!showInput)} />
      {showInput && <input ref={inputRef} />}
    </div>
  );
};

export default App;
