const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  date: Date,
  status: { type: String, enum: ["Present", "Absent"] },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
