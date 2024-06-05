import mongoose from "mongoose";

const ChoiceSchema = new mongoose.Schema({
  answers: { type: String, required: true },
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
});

const Choice = mongoose.model("Choice", ChoiceSchema);

export default Choice;
