//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;

const app = express();

let items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
