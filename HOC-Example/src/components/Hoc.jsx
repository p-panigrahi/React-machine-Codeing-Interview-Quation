import React from 'react'
import { useState } from 'react';

const HOC = (WarpperComp)=>{
  return (()=>{
    const [count,setCount] = useState(0);
    const handelClick = ()=>{
      setCount(count + 1);
    }
    return (
      <div>
        <WarpperComp handelClick={handelClick} count={count}/>
      </div>
    )
  })
}
export default HOC;