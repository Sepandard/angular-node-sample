const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Example app is listening on port 3000."));
// localhost:3000
app.post("/login", function (req, res) {
  if (req.body.username == "admin" && req.body.password == "admin") {
    res.json("hello user admin");
  } else {
    res.json("wrong username or password");
  }
});
