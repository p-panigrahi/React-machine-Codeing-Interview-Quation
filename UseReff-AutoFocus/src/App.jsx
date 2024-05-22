import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
const App = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [showInput]);
  return (
    <div>
      <FaSearch onClick={() => setShowInput(!showInput)} />
      {showInput && <input type="text" ref={inputRef} />}
    </div>
  );
};

export default App;
