import React, { useEffect, useState } from "react";

const App = () => {
  const [tabs, setTabs] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tabs}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  return (
    <div>
      <button onClick={() => setTabs("posts")}>Posts</button>
      <button onClick={() => setTabs("comments")}>Comments</button>
      <button onClick={() => setTabs("users")}>Users</button>

      {data?.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default App;
