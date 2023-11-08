const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const custModel = require("./models/Customers.js");
const config=require("./config/config.js")
app.use(express.json());
app.use(cors());
mongoose.connect(
  config.DB
).then(
    console.log("DB Connected")
);
app.listen(3001, () => {
  console.log("Server is Running");
});
app.post("/register", (req, res) => {
  custModel
    .create(req.body)
    .then((customers) => res.json(customers))
    .catch((err) => res.json(err));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  custModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("incorrect pass");
      }
    } else {
      res.json("no record exist");
    }
  });
});
