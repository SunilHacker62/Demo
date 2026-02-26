import React from "react";

export default function List() {
  const items = ["Apple", "Banana", "Mango"];

  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      console.log("You clicked:", e.target.textContent);
    }
  };

  return (
    <ul onClick={handleClick}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}