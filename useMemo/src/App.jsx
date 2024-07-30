import React, { useMemo, useState } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handelCount1 = () => {
    setCount1(count1 + 1);
  };
  const handelCount2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 299999999) i++;
    return count1 % 2 == 0;
  }, [count1]);
  return (
    <div>
      <button onClick={handelCount1}>Counter 1 = {count1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={handelCount2}>Counter 2 = {count2}</button>
    </div>
  );
};

export default App;
