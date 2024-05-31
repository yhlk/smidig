const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  question: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  score: { type: Number, required: true },
  feedback: { type: String },
});

module.exports = mongoose.model("Rating", RatingSchema);
