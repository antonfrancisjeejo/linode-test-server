const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Whiz Class</h1>");
});

app.get("/new",(req,res)=>{
  res.send("New route is working");
});

app.listen(process.env.PORT||5000, () => {
  console.log("App listening on port 5000");
});

module.exports = app;
