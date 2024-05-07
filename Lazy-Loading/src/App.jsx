import React from "react";
import Child from "./Child";
import { Suspense } from "react";
const ChildCom = React.lazy(() => import("./Child"));
const App = () => {
  return (
    <div>
      <Suspense fallback="Loading.....">
        <ChildCom />
      </Suspense>
    </div>
  );
};

export default App;
