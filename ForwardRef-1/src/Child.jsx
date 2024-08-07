import React from "react";
import { forwardRef } from "react";
const Child = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default forwardRef(Child);
