import React from "react";
import { useState, useEffect } from "react";

const Interview = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }, []);
  console.log(count);
  return <div>{count}</div>;
};

export default Interview;
