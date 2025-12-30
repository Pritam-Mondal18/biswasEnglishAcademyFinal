// const express = require("express");
// const router = express.Router();
// const Course = require("../models/Course");
// const { auth, isTeacher } = require("../middleware/auth");

// // ADD COURSE (Teacher only)
// router.post("/add", auth, isTeacher, async (req, res) => {
//   try {
//     const { title, description, price } = req.body;

//     const course = new Course({
//       title,
//       description,
//       price,
//       teacher: req.user.id,
//     });

//     await course.save();
//     res.status(201).json(course);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add course" });
//   }
// });

// module.exports = router;

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Course", courseSchema);
