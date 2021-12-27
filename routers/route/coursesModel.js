const express = require("express");
const req = require("express/lib/request");
const coursesModel = express.Router();

const {
  AddCoures,
  getCoures,
  deleteCoures,
  AddVideo,
  getCouresbyID,
  putCouresbyID,
  delVideo,
} = require("../controller/couress");
const { authentication } = require("../midelware/authentication");

coursesModel.post("/addCoures", authentication, AddCoures);
coursesModel.get("/getCoures", authentication, getCoures);
coursesModel.delete("/deletcures/:id", authentication, deleteCoures);
coursesModel.post("/AddVedio/:id", authentication, AddVideo);
coursesModel.delete("/delVedio/:id/:ele", authentication, delVideo);
coursesModel.get("/getCoures/:id", authentication, getCouresbyID);
coursesModel.put("/putCoures/:id", authentication, putCouresbyID);

module.exports = coursesModel;
