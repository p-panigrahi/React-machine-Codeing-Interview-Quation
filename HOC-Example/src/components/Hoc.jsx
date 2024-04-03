import React, { useState } from 'react'

const Hoc = (WapperComp) => {
  return ()=>{
    const [count, setCount] = useState(0);
    const hnadelClick = () => {
      setCount(count + 1);
    };
    return(
      <div>
        <WapperComp count={count} hnadelClick={hnadelClick}/>
      </div>
    )
  };
}

export default Hoc