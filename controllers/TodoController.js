const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncError");
const TodoModel = require("../Models/Todo");

//all todos
exports.allTodos = catchAsyncErrors(async (req, res, next) => {
  const allTodos = await TodoModel.find();
  return res.status(200).json({ data: allTodos });
});

//create new todo

exports.addNewTodo = catchAsyncErrors(async (req, res, next) => {
  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save().then((savedTodo) => {
      console.log(savedTodo);
      res.status(201).json({ msg: "Todo successfully saved" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "unable to save new todo" });
  }
});

//delete a todo by id

exports.deleteTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  await TodoModel.findByIdAndDelete(id);
  res.status(200).json({ msg: "Todo has been deleted." });
});

exports.updateTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  // Find and update the todo with new data
  const updatedTodo = await TodoModel.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  // Check if the todo was found and updated
  if (!updatedTodo) {
    return res.status(404).json({ msg: "Todo not found." });
  }

  res.status(200).json({ msg: "Todo has been updated.", data: updatedTodo });
});
