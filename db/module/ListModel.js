const mongoose = require("mongoose");

const ListModel = new mongoose.Schema({
  name: { type: String },
  Description: { type: String },
});


module.exports = mongoose.model("ListModel", ListModel);
