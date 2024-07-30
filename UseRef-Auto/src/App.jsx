import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
const App = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [open]);
  return (
    <div>
      <FaSearch onClick={() => setOpen(!open)} />
      {open && <input type="text" ref={inputRef} />}
    </div>
  );
};

export default App;
