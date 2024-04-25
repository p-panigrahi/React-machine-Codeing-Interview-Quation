import React from 'react'
import HOC from './Hoc';

const A = ({handelClick,count}) => {

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handelClick}>Click A</button>
    </div>
  )
}

export default HOC(A);