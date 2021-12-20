const express = require("express");
const coursesModel = express.Router();

const {
  AddCoures,
  getCoures,
  deleteCoures,AddVideo,getCouresbyID
  
} = require("../controller/couress");
const { authentication } = require("../midelware/authentication");

coursesModel.post("/addCoures", authentication, AddCoures);
coursesModel.get("/getCoures", authentication, getCoures);
coursesModel.delete("/deletcures/:id", authentication, deleteCoures);
coursesModel.post("/AddVedio/:id", authentication, AddVideo);
coursesModel.get("/getCoures/:id", authentication, getCouresbyID);


module.exports = coursesModel;
