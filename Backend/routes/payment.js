// const express = require("express");
// const Payment = require("../models/Payment");
// const { auth, isUser } = require("../middleware/auth");

// const router = express.Router();

// // Fake payment (replace with Razorpay later)
// router.post("/pay", auth, isUser, async (req, res) => {
//   const payment = await Payment.create({
//     ...req.body,
//     studentId: req.user.id,
//     status: "SUCCESS",
//     paymentId: "FAKE_TXN_" + Date.now(),
//   });

//   res.json(payment);
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const { auth, isUser } = require("../middleware/auth"); // ✅ correct import
const Payment = require("../models/Payment");

// =======================
// CREATE PAYMENT (STUDENT)
// =======================
router.post("/pay", auth, isUser, async (req, res) => {
  try {
    const { courseId, amount } = req.body;

    if (!courseId || !amount) {
      return res.status(400).json({ error: "Missing payment details" });
    }

    const payment = new Payment({
      user: req.user.id,
      course: courseId,
      amount,
      status: "paid",
    });

    await payment.save();

    res.json({ message: "Payment successful", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
