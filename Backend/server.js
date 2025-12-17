// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/auth");
// const courseRoutes = require("./routes/course");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/biswasacademy")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// app.use("/", authRoutes);
// app.use("/courses", courseRoutes);

// app.get("/", (req, res) => {
//   res.send("Backend running");
// });

// app.listen(5000, () => {
//   console.log("Server running at http://localhost:5000");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/course");
const attendanceRoutes = require("./routes/attendance");
const paymentRoutes = require("./routes/payment");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/biswasacademy")
  .then(() => console.log("MongoDB connected"));

app.use("/", authRoutes);
app.use("/courses", courseRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/payment", paymentRoutes);

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
