const userModel = require("../../db/module/userModel");
const bcrypt = require("bcrypt");

const getuser = async (req, res) => {
  const user = req.token.userId;
  try {
    const getinfo = await userModel.findOne({ _id: user });
    res.status(200).json(getinfo);
  } catch (err) {
    res.send(err);
  }
};

const updateinfo = async (req, res) => {
  const user = req.token.userId;
  let { name, img, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    console.log(name, img, password);
    const updateinfo = await userModel.findByIdAndUpdate(
      { _id: user },
      { name, img, password },
      { new: true }
    );
    console.log(updateinfo);

    res.status(200).json(updateinfo);
  } catch (err) {
    res.send(err);
  }
};

const removeuser = async (req, res) => {
  const user = req.token.userId;
  try {
    const deleuser = await userModel.findByIdAndDelete({ _id: user });
    res.status(200).json(deleuser);
  } catch (error) {
    res.send(err);
  }
};

const addcomment = async (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  //   console.log({ _id: user }, { $push: { comment: comment } });
  try {
    const addcoment = await userModel.findOneAndUpdate(
      { _id: user },
      { $push: { comment: comment } },
      { new: true }
    );
    console.log({ _id: user }, { $push: { comment: comment } });

    res.status(201).json(addcoment);
    console.log(addcoment);
  } catch (error) {
    res.send("error");
  }
};

module.exports = { getuser, updateinfo, removeuser, addcomment };
