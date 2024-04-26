import React, { useMemo, useState } from "react";

const App = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };
  const IncrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() =>{
    console.warn('...........');
    let i = 0;
    while(i < 2000000000) i++;
    return countOne % 2 === 0;
  },[countOne]);
  
  return (
    <>
      <button onClick={IncrementOne}>Counter - {countOne}</button>
      <span>{isEven?"Even":"Odd"}</span>
      <button onClick={IncrementTwo}>Counter - {countTwo}</button>
    </>
  );
};

export default App;
