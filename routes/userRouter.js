const express = require("express");
const router = express.Router();
const { allUsers } = require("../controllers/UserController");

router.route("/users").get(allUsers);

module.exports = router;
