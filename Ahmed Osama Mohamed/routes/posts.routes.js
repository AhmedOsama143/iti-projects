const express = require("express");

const router = express.Router();

const {
  getAllPosts,
  createPosts,
  getOnePost,
  deletePost,
} = require("../controller/posts.controller");

router.get("/", getAllPosts);
router.post("/", createPosts);
router.get("/:id", getOnePost);
router.delete("/:id", deletePost);

module.exports = router;
