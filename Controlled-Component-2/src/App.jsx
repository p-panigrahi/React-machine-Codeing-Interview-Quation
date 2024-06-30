import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState("");
  const [pwd, setPwd] = useState("");
  const handelChange = (e) => {
    if (e.target.name === "firstName") {
      setData(e.target.value);
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
          value={pwd}
          onChange={handelChange}
        />
      </form>
    </div>
  );
};

export default App;
