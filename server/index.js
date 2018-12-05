const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/ip", function(req, res) {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(req.connection)
  res.send({ ip })
});

app.listen(process.env.PORT || 8085, () => {
  console.log("hello, server is live")
});
