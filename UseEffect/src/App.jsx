// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [tab,setTab] = useState('posts');
//   const [data,setData] = useState([]);

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${tab}`)
//       .then(response => response.json())
//       .then(json => setData(json));
//       return (()=>{
//         console.log('Unmounted');
//       })
//   },[tab]);

//   return (
//     <>
//       <button onClick={()=>setTab('posts')}>Posts</button>
//       <button onClick={()=>setTab('users')}>Users</button>
//       <button onClick={()=>setTab('comments')}>Comments</button>
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [tab, setTab] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("Unmounted");
    };
  }, [data]);
  return (
    <div>
      <h1>Use Effect Hook Example</h1>
      <button onClick={() => setTab("posts")}>Posts</button>
      <button onClick={() => setTab("comments")}>Comments</button>
      <button onClick={() => setTab("users")}>Users</button>
      {data?.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default App;
