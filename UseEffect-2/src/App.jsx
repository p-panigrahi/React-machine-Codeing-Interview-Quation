import React, { useEffect, useState } from "react";

const App = () => {
  const [feth, setFeth] = useState("posts");
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${feth}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  },[feth]);

  return (
    <>
      <button onClick={() => setFeth("posts")}>Posts</button>
      <button onClick={() => setFeth("comments")}>Coment</button>
      <button onClick={() => setFeth("users")}>User</button>

      {data?.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default App;
