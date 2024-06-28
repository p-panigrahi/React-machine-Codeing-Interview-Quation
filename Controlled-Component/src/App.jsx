import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState("Aman");
  const [pdw, setPwd] = useState("");
  const handelChange = (e) => {
    if (e.target.name === "firstName") {
      const cap = e.target.value.toUpperCase();
      setData(cap);
    } else {
      setPwd(e.target.value);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={data}
          onChange={handelChange}
        />
        <input
          type="text"
          name="secondName"
          value={pdw}
          onChange={handelChange}
        />
      </form>
    </div>
  );
};

export default App;
