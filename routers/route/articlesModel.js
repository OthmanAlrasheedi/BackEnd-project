const express = require("express");
const articlesModel = express.Router();

const { addarti ,getarti} = require("../controller/articles");

articlesModel.post("/articl", addarti);
articlesModel.get("/articl",getarti)

module.exports = articlesModel;
