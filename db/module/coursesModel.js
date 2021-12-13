const mongoose = require("mongoose");

const coursesModel = new mongoose.Schema({
  name: { type: String },
  Description: { type: String },
  vedio: { type: String },
  img: { type: String },
  user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"}
});

module.exports = mongoose.model("coursesModel", coursesModel);
