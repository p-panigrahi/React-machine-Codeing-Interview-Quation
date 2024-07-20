import React, { useCallback, useState } from "react";
import Parent from "./Parent";

const App = () => {
  console.log("App Calling");

  const [count, setCounter] = useState(0);
  const [count1, setCounter1] = useState(0);
  const handelCount = () => {
    setCounter(count + 1);
  };

  const isCalling = useCallback(() => {
    console.log("isCalling");
  }, [count1]);
  return (
    <div>
      <h1>Use CallBack Example</h1>
      <Parent count={count1} fn={isCalling} />
      <button onClick={handelCount}>Counter - {count}</button>
    </div>
  );
};

export default App;
