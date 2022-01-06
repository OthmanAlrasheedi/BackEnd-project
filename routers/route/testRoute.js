const express = require("express");
const Test = express.Router();

const { gettest, addtest } = require("../controller/testing");
const { authentication } = require("../midelware/authentication");

Test.post("/addtset/:id", authentication, addtest);
Test.get("/gettset/:id", authentication, gettest);

module.exports = Test;
