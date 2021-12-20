const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  admin:{type:String},
  img:{type:String},
  LikeCoures:[{type: mongoose.Schema.Types.ObjectId, ref: "coursesModel"}] ,
});

module.exports = mongoose.model("userModel", userModel);
