const mongoose = require("mongoose");

const ShoeSchema = mongoose.Schema({
  name: String,
  desc: String,
  price: String,
  color: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Shoe", ShoeSchema);
