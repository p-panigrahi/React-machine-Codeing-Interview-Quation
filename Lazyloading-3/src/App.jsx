import React, { Suspense } from "react";
// import Child from "./components/Child";
const ChildComp = React.lazy(() => import("./components/Child"));
const App = () => {
  return (
    <div>
      I am Parent
      <Suspense fallback="Loading......">
        <ChildComp />
      </Suspense>
    </div>
  );
};

export default App;
