const user = require("../../db/module/userModel");

const getlike = async (req, res) => {
  const user = req.token.userId;
  try {
    const likeCoures = await user.findOne({ _id: user }).populate("LikeCoures");
    res.status(200).json(likeCoures);
  } catch (error) {
    res.send(error);
  }
};



const Addlike = async (req, res) => {
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const newLike = await userModel.findOneAndUpdate(
        { _id: user },
        { $push: { LikeCoffe: id } },
        { new: true }
      );
      res.status(201).json(newLike);
    } catch (error) {
      res.send(error);
    }
  };

module.exports = { getlike, Addlike };
