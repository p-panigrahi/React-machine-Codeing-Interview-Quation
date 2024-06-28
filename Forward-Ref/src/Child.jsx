import React from "react";
import { forwardRef } from "react";
const Child = (props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
};

export default forwardRef(Child);
