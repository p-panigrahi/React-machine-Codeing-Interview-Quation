import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const [showTab, setShowTab] = useState(false);
  const refValue = useRef(null);
  useEffect(() => {
    refValue.current?.focus();
  }, [showTab]);
  return (
    <div>
      <h1>UseRef Auto Fous Example</h1>
      <FaSearch onClick={() => setShowTab(!showTab)} />
      {showTab && <input type="text" ref={refValue} />}
    </div>
  );
};

export default App;
