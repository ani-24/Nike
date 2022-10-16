const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

const User = require("./../model/userSchema");

userRouter.use(express.json());

userRouter.post("/signup", async (req, res) => {
  try {
    // Generating salt to make each and every password unique
    const salt = await bcrypt.genSalt();
    // Hasing the password so that it is hard to encrypt
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // checking if the user exists
    const userExists = await User.find({ email: req.body.email });
    if (userExists.length === 0) {
      // Creating a new user based on the data received
      const newUser = new User({ ...req.body, password: hashedPass });
      await newUser.save();
      res.send("Guud buoy");
    } else {
      res.send("User already exists");
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

userRouter.post("/login", async (req, res) => {
  const user = User.find((user) => user.email === req.body.email);
  if (user) {
    const isPassCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPassCorrect) {
      res.send("Correct");
    } else {
      res.send({ error: "password incorrect" });
    }
  } else {
    res.send({ error: "User not found" });
  }
});

module.exports = userRouter;
