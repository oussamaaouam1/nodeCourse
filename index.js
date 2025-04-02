const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const Mydata = require("./models/mydataSchema");

app.get("/", (req, res) => {
  Mydata.find()
    .then((data) => {
      res.render("home", { title: "Home", arr: data });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/send", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  console.log(req.body);
  const myData = new Mydata(req.body);
  myData
    .save()
    .then(() => {
      console.log("Data saved to database");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/send");
});

mongoose
  .connect(
    "mongodb+srv://oussamaaouam:oussamasvt1@cluster0.vjkr9ag.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`listening to port ${port}`);

      console.log("connected to DB");
    });
  })
  .catch((err) => {
    console.log(err);
  });
