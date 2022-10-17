const express = require("express");
const { adminAuth } = require("../middleware/admin");
const adminRouter = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Shoe = require("./../model/shoeSchema");

adminRouter.get("/", adminAuth, async (req, res) => {
  const shoes = await Shoe.find().sort();
  res.render("index", { shoes });
});

adminRouter.get("/login", (req, res) => {
  res.render("login");
});

adminRouter.get("/add", async (req, res) => {
  res.render("add");
});

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

adminRouter.post("/add", upload.single("img"), async (req, res, next) => {
  try {
    const obj = {
      name: req.body.name,
      img: {
        data: fs.readFileSync(
          path.join(__dirname, `../uploads/${req.file.filename}`)
        ),
        contentType: "image/png",
      },
      desc: req.body.desc,
      price: req.body.price,
      color: req.body.color,
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

adminRouter.get("/update/:id", adminAuth, async (req, res) => {
  const shoe = await Shoe.findById(req.params.id);
  res.render("update", { shoe });
});

adminRouter.post("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
});

module.exports = adminRouter;
