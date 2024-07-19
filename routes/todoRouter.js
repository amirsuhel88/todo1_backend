const express = require("express");
const router = express.Router();
const {
  allTodos,
  addNewTodo,
  deleteTodo,
} = require("../controllers/TodoController");

router.route("/todos").get(allTodos).post(addNewTodo);
router.route("/todo/:id").delete(deleteTodo);

module.exports = router;
