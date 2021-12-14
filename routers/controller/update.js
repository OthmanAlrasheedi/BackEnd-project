const user = require("../../db/module/userModel");

const updateinfo = async (req, res) => {
  const id = req.params.id;
  let { name, password } = req.body;
  user
    .findByIdAndUpdate({ _id: id }, { name,password,  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { updateinfo };
