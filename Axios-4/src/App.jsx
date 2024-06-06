import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const [error, setError] = useState();

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setData(res.data))
  //     .catch((error) => setError(error.message));
  // }, [data]);
  const getApi = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getApi();
  }, [data]);
  return (
    <div>
      {error !== "" && <h1>{error}</h1>}
      {data?.map((item, i) => {
        const { body, title, id } = item;
        return (
          <div key={i}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
