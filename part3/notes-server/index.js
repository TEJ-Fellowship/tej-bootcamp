const { response } = require("express");
const express = require("express");

const App = express();

App.get("/", (request, response) => {
  response.setHeader("content-type", "text/plain").send("<h1>hello world</h1>");
});

App.listen("3001", () => {
  console.log("server listening on 3001");
});
