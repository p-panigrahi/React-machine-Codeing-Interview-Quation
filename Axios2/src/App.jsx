import React, { useEffect, useState } from "react";
import axios from "./api";
// const apiUrl = "https://jsonplaceholder.typicode.com";
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/post")
  //     .then((res) => setData(res.data))
  //     .catch((err) => setError(err.message));
  // }, []);
  const getApi = async () => {
    try {
      const api = await axios.get('/posts');
      setData(api.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(()=>{
    getApi();
  },[]);

  return (
    <div className="card">
      <h1>Get Data Using Axios</h1>
      {error !== "" && <h1>{error}</h1>}
      {data.slice(0,10).map((item) => {
        const { id, body, title } = item;

        return (
          <div>
            <h1>{title.slice(0,13).toUpperCase()}</h1>
            <p>{body.slice(0,100)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
