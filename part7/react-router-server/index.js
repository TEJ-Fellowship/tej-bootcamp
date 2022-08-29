const express = require("express");
const path = require("path");

const App = express();
App.use(express.static("build"));

// sends index.html
App.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

App.listen(3001, () => {
  console.log(`Server running on port 3001`);
});
