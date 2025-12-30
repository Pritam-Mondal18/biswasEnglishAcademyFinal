// const express = require("express");
// const Course = require("../models/Course");
// const { auth, isTeacher } = require("../middleware/auth");

// const router = express.Router();

// /* ===============================
//    ADD COURSE (Teacher only)
// ================================ */
// router.post("/add", auth, isTeacher, async (req, res) => {
//   try {
//     const course = await Course.create({
//       title: req.body.title,
//       description: req.body.description,
//       price: req.body.price,
//       teacherId: req.user.id,
//     });

//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add course" });
//   }
// });

// /* ===============================
//    GET ALL COURSES
// ================================ */
// router.get("/", async (req, res) => {
//   const courses = await Course.find();
//   res.json(courses);
// });

// /* ===============================
//    UPDATE COURSE (Teacher only)
// ================================ */
// router.put("/:id", auth, isTeacher, async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);

//     if (!course) {
//       return res.status(404).json({ error: "Course not found" });
//     }

//     // Only creator can update
//     if (course.teacherId.toString() !== req.user.id) {
//       return res.status(403).json({ error: "Not allowed" });
//     }

//     course.title = req.body.title;
//     course.description = req.body.description;
//     course.price = req.body.price;

//     await course.save();
//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: "Update failed" });
//   }
// });

// /* ===============================
//    DELETE COURSE (Teacher only)
// ================================ */
// router.delete("/:id", auth, isTeacher, async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);

//     if (!course) {
//       return res.status(404).json({ error: "Course not found" });
//     }

//     // Only creator can delete
//     if (course.teacherId.toString() !== req.user.id) {
//       return res.status(403).json({ error: "Not allowed" });
//     }

//     await course.deleteOne();
//     res.json({ message: "Course deleted" });
//   } catch (err) {
//     res.status(500).json({ error: "Delete failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const Course = require("../models/Course");
const { auth, isTeacher } = require("../middleware/auth");

const router = express.Router();

// ================= GET COURSES =================
router.get("/", auth, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= ADD COURSE =================
router.post("/add", auth, isTeacher, async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const course = new Course({
      title,
      description,
      price,
      teacher: req.user.id,
    });

    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= UPDATE COURSE =================
router.put("/:id", auth, isTeacher, async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= DELETE COURSE =================
router.delete("/:id", auth, isTeacher, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
