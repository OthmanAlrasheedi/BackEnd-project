const addArtical = require("../../db/module/articlesModel");
const userModel = require("../../db/module/userModel");

const getarti = async (req, res) => {
  try {
    const Savearti = await addArtical.find({});
    res.status(200).json(Savearti);
  } catch (error) {
    res.send(error);
  }
};

const addarti = async (req, res) => {
  const { article } = req.body;
  const user = req.token.userId;
  const useradmain = await userModel.findOne({ _id: user });
  try {
    if (useradmain.admin == true) {
      const newAdd = await addArtical({ article });
      const saveAdd = await newAdd.save();
      res.status(200).json(saveAdd);
    } else {
      res.send("your not admin");
    }
  } catch (error) {
    res.send(erroe);
  }
};

module.exports = { addarti, getarti };
