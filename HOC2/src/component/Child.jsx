import React from 'react'
import HOC from './HOC'
const Child = ({data,handelClick,name}) => {
 
  return (
    <div>
      <h3>I am {name}</h3>
      <button onClick={handelClick}>Counter - {data}</button>
    </div>
  )
}

export default HOC(Child);