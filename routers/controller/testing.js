const TestModel1 = require("../../db/module/testModel");

const gettest = async (req, res) => {
  const user = req.Token.userId;
};

const addtest = async (req, res) => {
  try {
    const { quis } = req.body;
    const { id } = req.params;

    const question = await new TestModel1.findOneAndUpdate(
      {
        _id: id,
      },
      $push,
      { qustion: quiz }
    );
    res.status(201).json(question);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addtest, gettest };

// {
//     //     q: { type: String },
//     //     s1: { ans: String, Boolean: true },
//     //     s2: { ans: String, Boolean: false },
//     //     s3: { ans: String, Boolean: false },
//     //     s4: { ans: String, Boolean: false },
//     //   },
