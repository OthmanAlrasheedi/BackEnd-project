const express = require("express");
const updateIn = express.Router();


const {updateinfo}= require("../controller/update")

updateIn.put("/update/:id",updateinfo)

module.exports=updateIn