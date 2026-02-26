import React from "react";
const Child = React.memo(({user}) => {
     return (
    <div>
      <div>Child</div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.address}</h3>
    </div>
  );
});
export default Child;

 
