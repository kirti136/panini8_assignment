const express = require("express");
const {
  addComment,
  getComments,
} = require("../controllers/commentController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/:postId", authenticateToken, addComment);
router.get("/:postId", getComments);

module.exports = router;
