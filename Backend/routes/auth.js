// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";

// const router = express.Router();

// /* ======================
//    SIGNUP
// ====================== */
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role, // student / teacher
//     });

//     res.status(201).json({
//       success: true,
//       message: "Signup successful",
//       userId: user._id,
//     });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// export default router;

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

/* ======================
   SIGNUP
====================== */
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      isActive: true,
    });

    res.status(201).json({
      success: true,
      message: "Signup successful",
      userId: user._id,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed" });
  }
});

/* ======================
   LOGIN  ✅ THIS WAS MISSING
====================== */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account disabled" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "dev_secret",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token,
      role: user.role,
      name: user.name,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;
