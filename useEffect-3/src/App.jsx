import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [tab, setTab] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  return (
    <div>
      <button onClick={() => setTab("posts")}>Posts</button>
      <button onClick={() => setTab("comments")}>Comments</button>
      <button onClick={() => setTab("users")}>Users</button>
      {data?.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)};</pre>;
      })}
    </div>
  );
};

export default App;
