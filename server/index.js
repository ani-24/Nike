// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// starting the express server
const app = express();

// adding port
const port = process.env.PORT || 5000;

// don't know what to call it
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(cookieParser());

// connecting to the database
require("./db/conn");

// adding the schema
const Shoe = require("./model/shoeSchema");

// Adding the routers
app.use("/users", require("./routes/users"));
app.use("/admin", require("./routes/admin"));

// setting up the view engine
app.set("view engine", "ejs");

// ROUTES
app.get("/", async (req, res) => {
  res.redirect("/admin");
});

app.get("/shoes", async (req, res) => {
  const shoes = await Shoe.find().sort();
  res.status(200).json(shoes);
});

// setting up server to the port
app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
