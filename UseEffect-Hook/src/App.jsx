import React from "react";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
const App = () => {
  const [tab, setTab] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  return (
    <div>
      <h1>Use Effect Hook Example</h1>
      <button onClick={() => setTab("posts")}>Posts</button>
      <button onClick={() => setTab("comments")}>Comments</button>
      <button onClick={() => setTab("users")}>Useres</button>
      <br />
      <br />
      <br />
      {data?.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default App;
