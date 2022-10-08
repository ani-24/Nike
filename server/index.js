// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

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

// don't know what to call it
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Image stuff (I don't know what's in it, I just copied and pasted from geeksforgeeks)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage });

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", upload.single("img"), async (req, res, next) => {
  try {
    const obj = {
      name: req.body.name,
      img: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
    };
    const result = await Shoe.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
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
  res.status(200).json(shoes);
});

// setting up server to the port
app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
