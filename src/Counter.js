import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    if(count>0)
    setCount((prev) => prev - 1);
  };
  const rst = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={rst}>Reset</button>
    </div>
  );
};
