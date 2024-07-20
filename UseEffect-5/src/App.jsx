import React, { useState, useEffect } from "react";

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
      <h1>UseEffect Hook Example</h1>
      <button onClick={() => setTab("posts")}>Posts</button>
      <button onClick={() => setTab("users")}>Users</button>
      <button onClick={() => setTab("comments")}>Comments</button>
      {data?.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default App;
