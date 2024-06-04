const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Session = require("../models/Session");

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

module.exports = router;
