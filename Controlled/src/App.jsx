import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("Aman");
  const [pd, setPd] = useState("");
  const handelChange = (e) => {
    if (e.target.name === "name") {
      setData(e.target.value);
    } else {
      setPd(e.target.value);
    }
  };
  return (
    <div>
      <h1>Controlled Component Example</h1>
      {data}
      <form>
        <input type="text" name="name" value={data} onChange={handelChange} />
        <input type="text" name="pwd" value={pd} onChange={handelChange} />
      </form>
    </div>
  );
};

export default App;
