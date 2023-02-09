const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Azure");
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Server is  on port 8080");
});
