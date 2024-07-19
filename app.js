const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
// const UserModel = require("./Models/User");
const TodoModel = require("./Models/Todo");
const user = require("./routes/userRouter");
const todo = require("./routes/todoRouter");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   UserModel.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });

app.use("/api", todo);
app.use("/api", user);

// app.get("/todo", (req, res) => {
//   TodoModel.find()
//     .then((todos) => res.json(todos))
//     .catch((err) => res.json(err));
// });

module.exports = app;
