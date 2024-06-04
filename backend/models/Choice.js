const mongoose = require("mongoose");

const ChoiceSchema = new mongoose.Schema({
  answers: { type: String, required: true },
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
});

module.exports = mongoose.model("Choice", ChoiceSchema);
