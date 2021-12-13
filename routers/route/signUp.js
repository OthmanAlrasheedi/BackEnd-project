const express = require("express");
const signUp = express.Router();

const { postSignUp } = require("../controller/signUp");
signUp.post("/signup", postSignUp);

module.exports = signUp;
