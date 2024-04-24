import React from 'react'

const Child = ({setData}) => {
  return (
    <div>
      <button onClick={()=>setData('Sanjukta Panigrahi')}>Click To Add</button>
    </div>
  )
}

export default Child