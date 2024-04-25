import React from "react";
import { Suspense } from "react";
// import Child from './child';
const ChildComp = React.lazy(() => import("./child.jsx"));

const App = () => {
  return (
    <div>
      <h1>I am Second Parent</h1>
      <Suspense fallback={'Loading....'}>
        <ChildComp />
      </Suspense>
    </div>
  );
};

export default App;
