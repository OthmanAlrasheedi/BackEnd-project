const express = require("express");
const coursesModel = express.Router();

const { AddCoures, getCoures, deleteCoures ,Addtask} = require("../controller/couress");
const { authentication } = require("../midelware/authentication");

coursesModel.post("/addCoures", authentication, AddCoures);
coursesModel.get("/getCoures", authentication, getCoures);
coursesModel.delete("/deletcures/:id", authentication, deleteCoures);

module.exports = coursesModel;
