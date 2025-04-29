require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

connectDB();
// ✅ For local dev — comment this out if deploying on Vercel
// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });

// ✅ For Vercel — uncomment this if deploying on Vercel
module.exports = app;