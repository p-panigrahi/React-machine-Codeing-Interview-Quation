import React from 'react'
import Child from './Child'
import { useState } from 'react'

const Parent = () => {
  const [data,setData] = useState('Aman');
  return (
    <>

    <div>I am Parent</div>
    <Child data={data}/>
    </>
  )
}

export default Parent