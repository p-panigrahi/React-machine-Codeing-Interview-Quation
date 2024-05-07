import React, { useEffect, useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
const App = () => {
  const [showInput,setShowInput] = useState(false);
  const inpuRef = useRef(null);
  useEffect(()=>{
    inpuRef.current?.focus();
  },[showInput]);
  return (
    <div>
      <FaSearchengin onClick={()=>setShowInput(!showInput)}/>
      <br/>
      <br/>
      {showInput && <input text="text" ref={inpuRef}/>}
    </div>
  );
};

export default App;
