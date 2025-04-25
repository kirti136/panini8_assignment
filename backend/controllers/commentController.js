const Comment = require("../models/Comment");

const addComment = async (req, res) => {
  const { content } = req.body;
  const comment = new Comment({
    content,
    author: req.user.id,
    post: req.params.postId,
  });
  await comment.save();
  res.status(201).json(comment);
};

const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate(
    "author",
    "username"
  );
  res.json(comments);
};

module.exports = {
  addComment,
  getComments,
};
