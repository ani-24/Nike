// importing modules
const express = require("express");
const bodyParser = require("body-parser");

// starting the express server
const app = express();

// adding port
const port = process.env.PORT || 5000;

// connecting to the database
require("./db/conn");

// adding the schema
const Shoe = require("./model/shoeSchema");

// setting up the view engine
app.set("view engine", "ejs");

// don't know what to call it but it's may be middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  try {
    const shoe = new Shoe(req.body);
    const result = await shoe.save();
    if (result) {
      res.status(201).render("index");
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

app.get("/shoes", async (req, res) => {
  const shoes = await Shoe.find().sort();
  res.status(200).render("shoes", { shoes });
});

// setting up server to the port
app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
