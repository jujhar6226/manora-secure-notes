const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

// Protected routes
router.get("/:userId", authenticateToken, getNotes);
router.post("/", authenticateToken, createNote);
router.put("/:id", authenticateToken, updateNote);
router.delete("/:id", authenticateToken, deleteNote);

module.exports = router;