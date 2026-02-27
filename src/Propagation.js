import React from "react";
function Propagation() {

  const divClick = () => {
    console.log("div clicked")
  }
  const buttonClick = () => {
    console.log("Button clicked")
  }
  return (
    <div onClick={divClick}>
      <button onClick={buttonClick}>
        Click Me
      </button>
    </div>
  );
}
export default Propagation