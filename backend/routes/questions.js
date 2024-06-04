const express = require("express");
const router = express.Router();

const Question = require("../models/Question");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { question, choiceList, session_id } = req.body;

  const newQuestion = new Question({
    question,
    choiceList,
    session_id,
  });

  try {
    const question = await newQuestion.save();
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
