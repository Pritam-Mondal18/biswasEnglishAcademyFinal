const express = require("express");
const Course = require("../models/Course");
const { auth, isTeacher } = require("../middleware/auth");

const router = express.Router();

router.post("/add", auth, isTeacher, async (req, res) => {
  const course = await Course.create({
    ...req.body,
    teacherId: req.user.id,
  });
  res.json(course);
});

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
