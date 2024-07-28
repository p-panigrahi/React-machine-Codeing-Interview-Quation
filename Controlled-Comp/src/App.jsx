import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("Aman");
  const [pwd, setPwd] = useState("");
  const handelChange = (e) => {
    if (e.target.name === "first") {
      setData(e.target.value);
    } else {
      setPwd(e.target.value);
    }
  };
  return (
    <div>
      <h1>Controlled Comp Example</h1>
      <form>
        <input type="text" name="first" value={data} onChange={handelChange} />
        <input type="text" name="second" value={pwd} onChange={handelChange} />
      </form>
    </div>
  );
};

export default App;
