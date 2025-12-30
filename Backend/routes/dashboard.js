const express = require("express");
const { auth } = require("../middleware/auth");

const router = express.Router();

/**
 * Example dashboard stats
 * Replace with real DB logic later
 */
router.get("/user-stats", auth, async (req, res) => {
  try {
    // TODO: Replace with MongoDB queries
    const stats = {
      purchased: 22,
      attendance: 85, // percentage
      finished: 20,
    };

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to load dashboard stats" });
  }
});

module.exports = router;
