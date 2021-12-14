const express = require("express");
const AddTask = express.Router();


const {AddTaske,getTask}=require("../controller/addTask")
const { authentication } = require("../midelware/authentication");

AddTask.post("/addtaslk",authentication,AddTaske)
AddTask.get("/gettaslk",authentication,getTask)


module.exports=AddTask