import React from "react";

const EventDelegation = () => {

  const handleClick = (e) => {
    console.log("Clicked:", e.target.textContent);
  };

  return (
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
};

export default EventDelegation;
