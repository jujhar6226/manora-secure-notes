const db = require("../config/db");

// ================= GET NOTES =================
exports.getNotes = (req, res) => {
  const userId = req.params.userId;

  if (req.user.id != userId) {
    return res.status(403).json({ message: "Access denied." });
  }

  const sql = "SELECT * FROM notes WHERE user_id = ?";

  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    res.status(200).json(results);
  });
};

// ================= CREATE NOTE =================
exports.createNote = (req, res) => {
  const { user_id, title, content } = req.body;

  if (req.user.id != user_id) {
    return res.status(403).json({ message: "Access denied." });
  }

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const sql =
    "INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)";

  db.query(sql, [user_id, title, content], (err) => {
    if (err) return res.status(500).json({ message: "Server error" });

    res.status(201).json({ message: "Note created successfully" });
  });
};

// ================= UPDATE NOTE =================
exports.updateNote = (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;

  const sql =
    "UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_id = ?";

  db.query(sql, [title, content, noteId, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note updated successfully" });
  });
};

// ================= DELETE NOTE =================
exports.deleteNote = (req, res) => {
  const noteId = req.params.id;

  const sql = "DELETE FROM notes WHERE id = ? AND user_id = ?";

  db.query(sql, [noteId, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  });
};