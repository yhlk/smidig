import express from "express";
import User from "../models/User.js";
import Session from "../models/Session.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { user_name, session_id } = req.body;

  const newUser = new User({
    user_name,
    session_id,
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
