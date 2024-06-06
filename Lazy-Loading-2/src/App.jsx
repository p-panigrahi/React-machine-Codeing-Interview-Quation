import React, { Suspense } from "react";
import Child from "./Child";
const LazyLoadComp = React.lazy(() => import("./Child"));
const App = () => {
  return (
    <div>
      I am Parent
      <Suspense fallback="Loading....">
        <LazyLoadComp />
      </Suspense>
    </div>
  );
};

export default App;
