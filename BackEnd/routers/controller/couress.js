const couress = require("../../db/module/coursesModel");

//  هنا فنكشن الترجيع
const getCoures = async (req, res) => {
  try {
    const coures = await couress.find({}).populate("user");
    res.status(200).json(coures);
  } catch (error) {
    res.send(error);
  }
};

// هنا فنكشن الاضافه

const AddCoures = async (req, res) => {
  const { name, Description, vedio } = req.body;
  const user = req.token.userId;
  const newCouers = new couress({ name, Description, vedio, user });

  try {
    const respnse = await newCouers.save();
    const coers = await couress.find({});
    res.status(200).json(coers);
  } catch (error) {
    res.send(error);
  }
};

// هنا فنكشن الحذف

const deleteCoures = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = req.token.userId;
  console.log(user);
  try {
    const del = await couress.findOneAndDelete({ _id: id });
    const coers = await couress.find({});
    res.status(201).json(coers);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { AddCoures, getCoures, deleteCoures };
