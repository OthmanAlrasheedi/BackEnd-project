const TestModel1 = require("../../db/module/testModel");
const userModel = require("../../db/module/userModel");

const gettest = async (req, res) => {
  const { id } = req.params;
  try {
    const getquiz = await TestModel1.findOne({ _id: id }).populate("quiz");
    res.status(200).json(getquiz);
  } catch (error) {
    res.send("error");
  }
};

const addtest = async (req, res) => {
  const { id } = req.params;
  const { quiz } = req.body;
  const user = req.token.userId;
  console.log(quiz, id);
  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const newquestion = await TestModel1.findOne({ _id: id });
      console.log(newquestion);
      if (newquestion) {
        const addquiz = await TestModel1.findByIdAndUpdate(
          { _id: id },
          { $push: { quiz: quiz } },
          {
            new: true,
          }
        );
        console.log(newquestion);

        res.status(201).json(addquiz);
      } else {
        const addnewquestion = new TestModel1({ _id: id, quiz: [quiz] });
        const respones = await addnewquestion.save();

        res.status(201).json(respones);
      }
    } else {
      res.send("your not admin");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addtest, gettest };
