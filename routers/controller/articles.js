const addArtical = require("../../db/module/articlesModel");

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
  try {
    const newAdd = await addArtical({ article });
    const saveAdd = await newAdd.save();
    res.status(200).json(saveAdd);
  } catch (error) {
    res.send(erroe);
  }
};

module.exports = { addarti, getarti };
