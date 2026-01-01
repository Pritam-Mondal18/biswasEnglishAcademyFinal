require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashed = await bcrypt.hash("Admin@2026", 12);

    await User.create({
      name: "Admin",
      email: "admin@biswasacademy.com",
      password: hashed,
      role: "admin",
    });

    console.log("✅ Admin created");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
