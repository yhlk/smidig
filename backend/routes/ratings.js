import express from "express";
import Rating from "../models/Rating.js";

const router = express.Router();

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

export default router;
