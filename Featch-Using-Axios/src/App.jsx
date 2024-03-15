import { useState, useEffect } from "react";
import axios from "./axios";
import "./App.css";
// const baseUrl = "https://jsonplaceholder.typicode.com";
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  // Using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/post")
      .then((res) => {
        setMyData(res.data);
      })
      .catch((err) => {
        setIsError(err.message);
      });
  }, []);

  // Using Async Await
  const Api = async () => {
    try {
      const apiData = await axios.get("/posts");
      setMyData(apiData.data);
    } catch (err) {
      setIsError(err.message);
    }
  };
  useEffect(() => {
    Api();
  }, []);
  return (
    <>
      <h1>Featch Example Using Axios</h1>
      {isError !== "" && <h1>{isError}</h1>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {myData.slice(0, 10).map((data) => {
          const { id, title, body } = data;
          return (
            <tbody key={id}>
              <tr className="table">
                <td>{id}</td>
                <td>{title.slice(0, 15).toUpperCase()}</td>
                <td>{body.slice(0, 100)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default App;
