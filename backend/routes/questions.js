import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

//Route to GET the questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Route to add a new question 
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

export default router;
