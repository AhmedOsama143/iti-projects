const express = require("express");

const router = express.Router();

const {
  createUser,
  deleteUser,
  getAllUsers,
} = require("../controller/users.controller");

router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
