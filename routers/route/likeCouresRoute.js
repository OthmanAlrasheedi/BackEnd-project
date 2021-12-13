const express = require("express");
const likeCouress = express.Router();

const { Addlike, getlike } = require("../controller/likecoures");
const { authentication } = require("../midelware/authentication");
likeCouress.post("/like/:id", authentication, Addlike);
likeCouress.get("/like", authentication, getlike);
module.exports = likeCouress;
