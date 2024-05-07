import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  // console.log(data);
  // console.log(error);
  // using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/post")
  //     .then((res) => setData(res.data))
  //     .catch((error) => setError(error.message));
  // }, []);

  // using asyn await
  const getApi = async () => {
    try {
      const  apiData  = await axios.get(
        "https://jsonplaceholder.typicode.com/post"
      );
      setData(apiData.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(()=>{
    getApi();
  },[]);
  return (
    <div>
      {error !== " " && <h1>{error}</h1>}
      {data?.slice(0, 10).map((item, index) => {
        const { id, title, body } = item;
        return (
          <div key={id}>
            <h1>{title.slice(0, 50)}</h1>
            <p>{body.slice(0, 150)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
