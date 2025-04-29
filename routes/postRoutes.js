const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  toggleLike,
} = require("../controllers/postController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getPosts);
router.post("/", authenticateToken, createPost);
router.get("/:id", getPost);
router.put("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);
router.post("/:id/like", authenticateToken, toggleLike);

module.exports = router;
