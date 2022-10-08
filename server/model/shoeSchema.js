const mongoose = require("mongoose");

const ShoeSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Shoe", ShoeSchema);
