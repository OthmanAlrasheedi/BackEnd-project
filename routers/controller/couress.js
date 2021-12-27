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

const getCouresbyID = async (req, res) => {
  const { id } = req.params;
  try {
    const getbyId = await couress.findOne({ _id: id }).populate("vedios");
    res.status(200).json(getbyId);
  } catch (err) {
    res.send(err);
  }
};

// هنا فنكشن الاضافه

const AddCoures = async (req, res) => {
  const { name, Description, img, vedio } = req.body;
  const user = req.token.userId;
  const newCouers = new couress({ name, Description, vedio, img, user });

  try {
    const respnse = await newCouers.save();
    const coers = await couress.find({});
    res.status(200).json(coers);
  } catch (error) {
    res.send(error);
  }
};
const AddVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { vedio } = req.body;
    const addVed = await couress.findByIdAndUpdate(
      { _id: id },
      { $push: { vedios: vedio } },
      { new: true }
    );
    res.status(201).json(addVed);
  } catch (err) {
    res.send(err);
  }
};

// حذف بالاييندكس
// const { id , i } = req.params;
// console.log(i,id);

// const courser = await couress.findOne({_id:id})
// const arr = courser.vedios
// arr.splice(i,1)
// let response = await couress.findOneAndUpdate({_id:id} ,{vedios:arr}, {new:true})
// res.send(response)

const delVideo = async (req, res) => {
  try {
    const { id, ele } = req.params;
    const delVed = await couress.findByIdAndUpdate(
      { _id: id },
      { $pull: { vedios: ele } },
      { new: true }
    );
    res.status(200).json(delVed);
  } catch (err) {
    res.send(err);
  }
};
// هنا فنكشن الحذف

const deleteCoures = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const del = await couress.findOneAndDelete({ _id: id, user: user });
    const coers = await couress.find({});
    res.status(201).json(coers);
  } catch (error) {
    res.send(error);
  }
};
const putCouresbyID = async (req, res) => {
  let { Description, img } = req.body;
  const { id } = req.params;
  console.log(id);
  const user = req.token.userId;
  console.log(user);
  try {
    const updacours = await couress.findByIdAndUpdate(
      { _id: id, user: user },
      { Description, img },
      { new: true }
    );
    console.log(updacours);
    const coers = await couress.find({});
    res.status(200).json(coers);

    console.log(coers);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  AddCoures,
  getCoures,
  deleteCoures,
  AddVideo,
  getCouresbyID,
  putCouresbyID,
  delVideo,
};
