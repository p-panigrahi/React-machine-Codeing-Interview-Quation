import React from "react";
import { Suspense } from "react";
const LazyCom = React.lazy(() => import("./Child"));
const App = () => {
  return (
    <div>
      <h1>Lazyloading Example</h1>
      <Suspense fallback="Loading......">
        <LazyCom />
      </Suspense>
    </div>
  );
};

export default App;
