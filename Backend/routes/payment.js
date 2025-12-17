const express = require("express");
const Payment = require("../models/Payment");
const { auth, isUser } = require("../middleware/auth");

const router = express.Router();

// Fake payment (replace with Razorpay later)
router.post("/pay", auth, isUser, async (req, res) => {
  const payment = await Payment.create({
    ...req.body,
    studentId: req.user.id,
    status: "SUCCESS",
    paymentId: "FAKE_TXN_" + Date.now(),
  });

  res.json(payment);
});

module.exports = router;
