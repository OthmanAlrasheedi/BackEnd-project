const express = require("express");
const articlesModel = express.Router();

const { addarti, getarti } = require("../controller/articles");
const { authentication } = require("../midelware/authentication");

articlesModel.post("/articl", authentication, addarti);
articlesModel.get("/articl", authentication, getarti);

module.exports = articlesModel;
