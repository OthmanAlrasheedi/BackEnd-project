const user = require("../../db/module/userModel");

const updateinfo = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userID;
  let { name, email, password } = req.body;
  user
    .findByIdAndUpdate({ _id: id }, { name, email, password, user })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { updateinfo };
