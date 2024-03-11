import { useState, useEffect } from "react";
import axios from "./axios";
import "./App.css";
// const Api = "https://jsonplaceholder.typicode.com";
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // First Method
  // using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setMyData(res.data);
  //     })
  //     .catch((error) => {
  //       setIsError(error.message);
  //       // console.log(error.message);
  //     });
  // }, []);

  // Second Method
  // using asyn await
  const getApi = async () => {
    try {
      const res = await axios.get("/comments");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {});
  getApi();
  return (
    <>
      <h1>Table ForMat</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {myData.slice(0, 10).map((post) => {
            const { id, name, email, body } = post;
            return (
              <tr className="table" key={id}>
                <td>{id}</td>
                <td>{name.slice(0, 15).toUpperCase()}</td>
                <td>{email}</td>
                <td>{body.slice(0, 100)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
