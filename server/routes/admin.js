const express = require("express");
const { adminAuth } = require("../middleware/admin");
const adminRouter = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Shoe = require("./../model/shoeSchema");

function toBase64(arr) {
  arr = new Uint8Array(arr);
  const base64 = btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
  return base64;
}

adminRouter.get("/", adminAuth, async (req, res) => {
  const shoes = await Shoe.find().sort();
  shoes.forEach((el) => {
    el.img = `data:image/png;base64,${toBase64(el.img)}`;
  });
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

adminRouter.post("/add", adminAuth, async (req, res, next) => {
  try {
    const obj = {
      name: req.body.name,
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
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.post("/update/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.post("/delete/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
});

module.exports = adminRouter;
