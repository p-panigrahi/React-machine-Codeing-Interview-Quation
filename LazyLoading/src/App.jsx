import "./App.css";
// import Child from "./child";
import React, { Suspense } from "react";
const ChildComp = React.lazy(() => import("./child.jsx"));
function App() {
  return (
    <>
      <h1>LazyLoading Example</h1>
      <Suspense fallback={<h1>please wait ......</h1>}>
        <ChildComp />
      </Suspense>
    </>
  );
}

export default App;
