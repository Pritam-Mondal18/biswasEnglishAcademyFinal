// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// // =====================
// // FORGOT PASSWORD
// // =====================
// router.post("/forgot-password", async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(404).json({ error: "User not found" });

//   const token = crypto.randomBytes(32).toString("hex");

//   user.resetToken = token;
//   user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 mins
//   await user.save();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const resetLink = `http://localhost:5173/reset-password/${token}`;

//   await transporter.sendMail({
//     to: user.email,
//     subject: "Password Reset",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset password</p>`,
//   });

//   res.json({ message: "Reset email sent" });
// });

// // =====================
// // RESET PASSWORD
// // =====================
// router.post("/reset-password/:token", async (req, res) => {
//   const user = await User.findOne({
//     resetToken: req.params.token,
//     resetTokenExpiry: { $gt: Date.now() },
//   });

//   if (!user) {
//     return res.status(400).json({ error: "Invalid or expired token" });
//   }

//   user.password = await bcrypt.hash(req.body.password, 10);
//   user.resetToken = undefined;
//   user.resetTokenExpiry = undefined;

//   await user.save();

//   res.json({ message: "Password reset successful" });
// });

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "student",
    });

    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      role: user.role,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
