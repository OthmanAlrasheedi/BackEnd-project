const express = require("express");
const articlesModel = express.Router();

const { addarti } = require("../controller/articles");

articlesModel.post("/articl", addarti);

module.exports = articlesModel;
