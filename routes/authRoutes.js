const express = require("express");
const {
  register,
  login,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticateToken, getUserProfile);
router.put("/profile", authenticateToken, updateUserProfile);

module.exports = router;
