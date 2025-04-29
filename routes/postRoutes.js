const express = require("express");
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  toggleLike,
} = require("../controllers/postController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getPosts);
router.post("/", authenticateToken, createPost);
router.put("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);
router.post("/:id/like", authenticateToken, toggleLike);

module.exports = router;
