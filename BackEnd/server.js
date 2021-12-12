const express = require("express");
require("./db/db");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const signUp = require("./routers/route/signUp");
const login = require("./routers/route/loginRoute");
const coursesModel = require("./routers/route/coursesModel");
const articlesModel = require("./routers/controller/articles");

app.use(signUp);
app.use(login);
app.use(coursesModel);
app.use(articlesModel);

const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
