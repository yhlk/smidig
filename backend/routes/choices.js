import express from "express";
import Choice from "../models/Choice.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const choices = await Choice.find();
    res.json(choices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { answers, question_id } = req.body;

  const newChoice = new Choice({
    answers,
    question_id,
  });

  try {
    const choice = await newChoice.save();
    res.json(choice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
