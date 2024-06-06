import React, { useState } from "react";
import Parent from "./components/Parent";

const App = () => {
  const [data, setData] = useState("Aman");
  return (
    <div>
      <Parent data={data} setData={setData} />
    </div>
  );
};

export default App;
