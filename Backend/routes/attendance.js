const express = require("express");
const Attendance = require("../models/Attendance");
const { auth, isTeacher, isUser } = require("../middleware/auth");

const router = express.Router();

// Teacher marks attendance
router.post("/mark", auth, isTeacher, async (req, res) => {
  const attendance = await Attendance.create(req.body);
  res.json(attendance);
});

// Student views attendance
router.get("/my", auth, isUser, async (req, res) => {
  const data = await Attendance.find({ studentId: req.user.id });
  res.json(data);
});

module.exports = router;
