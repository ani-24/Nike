const mongoose = require("mongoose");

const ShoeSchema = mongoose.Schema({
  name: String,
  desc: String,
  price: String,
  color: String,
  img: {
    type: Buffer,
  },
});

module.exports = mongoose.model("Shoe", ShoeSchema);
