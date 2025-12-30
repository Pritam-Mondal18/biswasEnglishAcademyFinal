const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// TEMP MOCK (replace with DB later)
router.get("/hours", auth, (req, res) => {
  const { range } = req.query;

  const data = {
    weekly: [2, 4, 3, 8, 5, 6, 4],
    monthly: [20, 18, 22, 25],
    yearly: [120, 150, 180, 200, 220, 250],
  };

  res.json({
    range,
    labels:
      range === "weekly"
        ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        : range === "monthly"
        ? ["Week 1", "Week 2", "Week 3", "Week 4"]
        : ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    values: data[range],
    total: data[range].reduce((a, b) => a + b, 0),
  });
});

module.exports = router;
