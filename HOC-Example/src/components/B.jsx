import React from 'react'
import HOC from './Hoc';
const B = ({handelClick,count}) => {

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handelClick}>Click B</button>
    </div>
  )
}

export default HOC(B);