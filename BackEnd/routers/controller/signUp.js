const userModel = require("../../db/module/userModel");
const bcrypt = require("bcrypt");

const postSignUp = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password, LikeCoures: [] });
    const response = await newUser.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postSignUp };
