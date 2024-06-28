import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "./BaseUrl";
// const URL = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [apiData, setApiData] = useState([]);
  const [isError, setIsError] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setApiData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, [apiData]);
  const getApi = async () => {
    try {
      const api = await axios.get("/posts");
      setApiData(api.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApi();
  }, [apiData]);
  return (
    <div>
      <h1>Axios Example</h1>
      {isError !== "" && <h1>{isError}</h1>}
      {apiData?.map((items, index) => {
        const { body, title, id } = items;
        return (
          <div key={index}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
