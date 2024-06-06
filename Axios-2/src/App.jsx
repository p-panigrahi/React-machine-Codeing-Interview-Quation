import React from "react";
import { useState } from "react";
import axios from "./URL.js";
import { useEffect } from "react";
// const Url = "https://jsonplaceholder.typicode.com";
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/post")
  //     .then((res) => setData(res.data))
  //     .catch((error) => setError(error.message));
  // }, [data]);

  const getData = async () => {
    try {
      const res = await axios.get('/posts');
      setData(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      <h1>Axios Example</h1>
      {error !== "" && <h1>{error}</h1>}
      {data?.map((item, i) => {
        const { body, title, id } = item;
        return (
          <div key={i}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h4>{body}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default App;
