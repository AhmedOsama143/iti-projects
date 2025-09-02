const Post = require("../model/Posts");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};
const createPosts = async (req, res) => {
  const { title, body } = req.body;

  console.log(title, body);
  await Post.create({
    title,
    body,
  });
  res.send("post created");
};
const getOnePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.send(post);
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);
  res.send("Post deleted");
};

module.exports = {
  getAllPosts,
  createPosts,
  getOnePost,
  deletePost,
};
