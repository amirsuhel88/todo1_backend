const express = require("express");
const router = express.Router();
const UserModel = require("../Models/User");
const catchAsyncErrors = require("../middleware/catchAsyncError");

//all users

exports.allUsers = catchAsyncErrors(async (req, res, next) => {
  const allUsers = await UserModel.find();
  return res.status(200).json({ data: allUsers });
});
