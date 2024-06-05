import express from "express";
import mongoose from "mongoose";
import Session from "../models/Session.js";
import Question from "../models/Question.js";
import Choice from "../models/Choice.js";
import User from "../models/User.js";

const router = express.Router();

let globalSessionCode = null;
let sessionId = null;

// Generate a new session code when the server starts
const generateGlobalSessionCode = async () => {
  try {
    globalSessionCode = Math.random().toString(36).substr(2, 9);
    console.log(`Generated global session code: ${globalSessionCode}`);

    let session = await Session.findOne({ enteringCode: globalSessionCode });
    if (!session) {
      session = new Session({
        enteringCode: globalSessionCode,
      });
      sessionId = session._id;
      await session.save();
      console.log(
        `Session saved with code: ${globalSessionCode} and ID: ${sessionId}`
      );

      //Ex questions and choices, change later
      const choice1 = new Choice({ answers: "Red" });
      const choice2 = new Choice({ answers: "Blue" });
      const choice3 = new Choice({ answers: "Green" });
      await choice1.save();
      await choice2.save();
      await choice3.save();

      const question = new Question({
        question: "What is your favorite color?",
        choiceList: [choice1._id, choice2._id, choice3._id],
        session_id: session._id,
      });
      await question.save();
    } else {
      sessionId = session._id;
      console.log(
        `Session already exists with code: ${globalSessionCode} and ID: ${sessionId}`
      );
    }
  } catch (err) {
    console.error(err);
  }
};

generateGlobalSessionCode();

router.get("/generate", (req, res) => {
  try {
    res.json({ enteringCode: globalSessionCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

//Check if a session is not found and if a student already exists
//If a student doesn't exist create one
router.post("/login", async (req, res) => {
  const { user_name, session_code } = req.body;

  try {
    const session = await Session.findOne({ enteringCode: session_code });
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    const existingUser = await User.findOne({
      user_name,
      session: session._id,
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists in this session" });
    }

    const user = new User({ user_name, session: session._id });
    await user.save();

    const questions = await Question.find({ session_id: session._id }).populate(
      "choiceList"
    );

    res.json({ user, questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
