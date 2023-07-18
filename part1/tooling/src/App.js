import React from "react";
import SayHello from "./SayHello";

let App = () => {
  return React.createElement("div", {}, [
    React.createElement(SayHello, { firstName: "Rushil" }),
    React.createElement(SayHello, { firstName: "Sushil" }),
    React.createElement(SayHello, { firstName: "Liza" }),
  ]);
};

export default App;
