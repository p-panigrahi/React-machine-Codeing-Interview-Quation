import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "./api";
// const api = 'https://jsonplaceholder.typicode.com';
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  // using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/post")
  //     .then((res) => setData(res.data))
  //     .catch((error)=>setError(error.message));
  // }, []);
  // async await
  const getApiData = async() => {
    try {
      const resData = await axios.get(
        '/post'
      );
      // console.log(resData.data);
      setData(resData.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <h1>Axios Present</h1>
      {error != "" && <h2>{error}</h2>}
      <div className="grid">
        {data.slice(0, 10).map((item) => {
          const { title, body, id } = item;
          return (
            <div className="card" key={id}>
              <div>
                <h2>{title.slice(0, 150).toUpperCase()}</h2>
              </div>
              <div>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
