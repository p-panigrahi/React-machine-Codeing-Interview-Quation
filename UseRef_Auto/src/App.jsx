import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
const App = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [show]);
  return (
    <div>
      <h1>Use Ref Auto Focus Example</h1>
      <CiSearch onClick={() => setShow(!show)} />
      {show && <input type="text" ref={inputRef} />}
    </div>
  );
};

export default App;
