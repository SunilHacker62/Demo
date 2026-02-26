import React from "react";
import Child from "./Child";
import { useState } from "react";

export const Parent = () => {
    const[count, setCount] = useState(0)

    const user = { name: "Sunil", age: 28, address: "Bangalore" };
    
  return (
    <div>
      <div>Parent</div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev=>prev+1)}>Button</button>
      <Child user={user} />
    </div>
  );
};
