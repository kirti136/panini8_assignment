const Post = require("../models/Post");

const createPost = async (req, res) => {
  const { title, content, tags } = req.body;
  const post = new Post({ title, content, tags, author: req.user.id });
  await post.save();
  res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

const updatePost = async (req, res) => {
  const { title, content, tags } = req.body;
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { title, content, tags },
    { new: true }
  );
  res.json(post);
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};

const toggleLike = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const index = post.likes.indexOf(req.user.id);
  if (index === -1) {
    post.likes.push(req.user.id);
  } else {
    post.likes.splice(index, 1);
  }
  await post.save();
  res.json(post);
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  toggleLike,
};
