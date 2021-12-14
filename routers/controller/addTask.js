const AddTask = require("../../db/module/ListModel");

const getTask = async (req, res) => {
  try {
    const coures = await AddTask.find({});
    res.status(200).json(coures);
  } catch (error) {
    res.send(error);
  }
};

// هنا فنكشن الاضافه

const AddTaske = async (req, res) => {
  const { name, Description } = req.body;
  const user = req.token.userId;
  try {
    const newCouers = new AddTask({ name, Description });

    const respnse = await newCouers.save();
    res.status(200).json(respnse);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { AddTaske, getTask };