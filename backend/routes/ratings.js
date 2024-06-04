const express = require("express");
const router = express.Router();
const Rating = require("../models/Rating");

router.post("/", async (req, res) => {
  const { question, user_id, score, feedback } = req.body;

  const newRating = new Rating({
    question,
    user_id,
    score,
    feedback,
  });

  try {
    const rating = await newRating.save();
    res.json(rating);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
