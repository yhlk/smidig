import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  choiceList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Choice" }],
  session_id: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
