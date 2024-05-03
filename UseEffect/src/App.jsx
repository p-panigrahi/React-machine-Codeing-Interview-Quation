import React, { useEffect, useState } from 'react'

const App = () => {
  const [tab,setTab] = useState('posts');
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
      .then(response => response.json())
      .then(json => setData(json));
      return (()=>{
        console.log('Unmounted');
      })
  },[tab]);

  return (
    <>
      <button onClick={()=>setTab('posts')}>Posts</button>
      <button onClick={()=>setTab('users')}>Users</button>
      <button onClick={()=>setTab('comments')}>Comments</button>

      {data?.map((item,i)=>{
        return (
          <pre key={i}>
          {JSON.stringify(item)};
          </pre>
        )
      })}
    </>
    
  )
}

export default App