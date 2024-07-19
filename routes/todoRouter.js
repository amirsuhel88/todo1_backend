const express = require("express");
const router = express.Router();
const {
  allTodos,
  addNewTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/TodoController");

router.route("/todos").get(allTodos).post(addNewTodo);
router.route("/todo/:id").delete(deleteTodo).put(updateTodo);

module.exports = router;
