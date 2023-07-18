import React from "react";

let SayHello = (props) => {
  return React.createElement("h1", { id: "myId" }, `Hello ${props.firstName}`);
};

export default SayHello;
