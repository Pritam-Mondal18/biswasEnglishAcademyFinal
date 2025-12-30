// const express = require("express");
// const Attendance = require("../models/Attendance");
// const { auth, isTeacher, isUser } = require("../middleware/auth");

// const router = express.Router();

// // Teacher marks attendance
// router.post("/mark", auth, isTeacher, async (req, res) => {
//   const attendance = await Attendance.create(req.body);
//   res.json(attendance);
// });

// // Student views attendance
// router.get("/my", auth, isUser, async (req, res) => {
//   const data = await Attendance.find({ studentId: req.user.id });
//   res.json(data);
// });

// module.exports = router;

const express = require("express");
const Attendance = require("../models/Attendance");
const { auth, isTeacher } = require("../middleware/auth");

const router = express.Router();

/* =====================================================
   ADD ATTENDANCE (Teacher only)
   ===================================================== */
router.post("/", auth, isTeacher, async (req, res) => {
  try {
    const { studentId, date, status } = req.body;

    if (!studentId || !date || !status) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const attendance = new Attendance({
      studentId,
      date,
      status,
    });

    await attendance.save();

    res.status(201).json({
      message: "Attendance added successfully",
      attendance,
    });
  } catch (err) {
    console.error("Attendance error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

/* =====================================================
   GET ALL ATTENDANCE (Teacher only)
   ===================================================== */
router.get("/", auth, isTeacher, async (req, res) => {
  try {
    const records = await Attendance.find().populate("studentId", "name email");
    res.status(200).json(records);
  } catch (err) {
    console.error("Fetch attendance error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
