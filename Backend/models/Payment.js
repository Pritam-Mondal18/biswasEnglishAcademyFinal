const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  amount: Number,
  paymentId: String,
  status: String,
});

module.exports = mongoose.model("Payment", PaymentSchema);
