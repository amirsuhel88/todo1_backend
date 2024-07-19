const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  todo: String,
});

const TodoModel = mongoose.model("todos", todoSchema);

module.exports = TodoModel;
