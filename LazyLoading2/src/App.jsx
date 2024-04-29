import React, { Suspense } from "react";
// import Child from './component/Child'
const ChildCom = React.lazy(() => import("./component/Child"));
const App = () => {
  return (
    <div>
      <h3>I am Parent</h3>
      <Suspense fallback="Loading.....">
        <ChildCom />
      </Suspense>
    </div>
  );
};

export default App;
