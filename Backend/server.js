// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/auth");
// const courseRoutes = require("./routes/course");
// const attendanceRoutes = require("./routes/attendance");
// const paymentRoutes = require("./routes/payment");

// const app = express();

// /* =========================
//    CORS CONFIG (PRODUCTION)
// ========================= */
// const allowedOrigins = process.env.ALLOWED_ORIGINS
//   ? process.env.ALLOWED_ORIGINS.split(",")
//   : [];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests from tools like Postman
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       return callback(new Error("CORS not allowed"));
//     },
//     credentials: true,
//   })
// );

// /* =========================
//    MIDDLEWARE
// ========================= */
// app.use(express.json());

// /* =========================
//    DATABASE CONNECTION
// ========================= */
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err.message);
//     process.exit(1);
//   });

// /* =========================
//    ROUTES
// ========================= */
// app.use("/", authRoutes);
// app.use("/courses", courseRoutes);
// app.use("/attendance", attendanceRoutes);
// app.use("/payment", paymentRoutes);

// /* =========================
//    HEALTH CHECK
// ========================= */
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// /* =========================
//    SERVER START
// ========================= */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
// -------------------------------------------------------------------------------------------------
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const analyticsRoutes = require("./routes/analytics");

// const app = express();
// app.use("/analytics", analyticsRoutes);

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/biswasacademy")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // User Schema
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: {
//     type: String,
//     enum: ["teacher", "user"],
//     default: "user",
//   },
// });

// const User = mongoose.model("User", UserSchema);

// // ================= SIGNUP =================
// app.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     res.json({ message: "Signup successful" });
//   } catch (err) {
//     res.status(500).json({ error: "Signup failed" });
//   }
// });

// // ================= LOGIN =================
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user._id, role: user.role }, "SECRET_KEY", {
//       expiresIn: "1d",
//     });

//     res.json({
//       token,
//       role: user.role,
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Login failed" });
//   }
// });

// // Server
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/dashboard", dashboardRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

app.use("/", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
