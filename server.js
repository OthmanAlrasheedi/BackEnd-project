const express = require("express");
require("./db/db");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const signUp = require("./routers/route/signUp");
const login = require("./routers/route/loginRoute");
const coursesModel = require("./routers/route/coursesModel");
const articlesModel = require("./routers/route/articlesModel");
const likeCouress = require("./routers/route/likeCouresRoute");
const AddTask = require("./routers/route/AddtaskRoute");
const user = require("./routers/route/userRoute");
app.use(signUp);
app.use(login);
app.use(coursesModel);
app.use(articlesModel);
app.use(likeCouress);
app.use(AddTask);
app.use(user);
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
