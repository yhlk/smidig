const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  choice_id: { type: mongoose.Schema.Types.ObjectId, ref: "Choice" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Result", ResultSchema);
