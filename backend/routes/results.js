const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

router.post("/", async (req, res) => {
  const { question_id, choice_id, user_id } = req.body;

  const newResult = new Result({
    question_id,
    choice_id,
    user_id,
  });

  try {
    const result = await newResult.save();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
