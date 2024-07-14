import React, { Suspense } from "react";
// import Child from "./Child";
const ChildComp = React.lazy(() => import("./Child"));
const App = () => {
  return (
    <div>
      <h1>I am Parent</h1>
      <br />
      <br />
      <br />
      <Suspense fallback="Loading......">
        <ChildComp />
      </Suspense>
    </div>
  );
};

export default App;
