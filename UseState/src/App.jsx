import React, { useState } from 'react'
const ok = ()=>{
  console.log("Ok");
  return 0;
}
const App = () => {
  const [data,setData] = useState(ok);

  const plus = ()=>{
    setData((prevData)=>(prevData + 1));
    console.log("Count Increase");
  }
  const sub = ()=>{
    setData(data - 1);
    console.log("Sub Track");
  }
  return (
    <div>
      <button onClick={plus}>Plus</button>
      <h1>{data}</h1>
      <button onClick={sub}>Sub</button>
    </div>
  )
}

export default App