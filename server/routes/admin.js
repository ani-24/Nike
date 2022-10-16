const express = require("express");
const { authAdmin } = require("../middleware/admin");
const adminRouter = express.Router();

const Shoe = require("./../model/shoeSchema");

adminRouter.get(
  "/",
  authAdmin(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD),
  async (req, res) => {
    const shoes = await Shoe.find().sort();
    res.render("index", { shoes });
  }
);

adminRouter.get("/login", (req, res) => {
  res.render("login");
});

adminRouter.post("/login", async (req, res) => {
  if (
    req.body.username === process.env.ADMIN_USERNAME &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    const shoes = await Shoe.find().sort();
    res.render("index", { shoes });
  }
});

adminRouter.get(
  "/update/:id",
  authAdmin(process.env.USERNAME, process.env.PASSWORD),
  async (req, res) => {
    const shoe = await Shoe.findById(req.params.id);
    res.render("update", { shoe });
  }
);

adminRouter.post(
  "/update/:id",
  authAdmin(process.env.USERNAME, process.env.PASSWORD),
  async (req, res) => {
    try {
      console.log(req.params.id, req.body);
      const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }
);

module.exports = adminRouter;
