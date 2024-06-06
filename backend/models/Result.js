import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  choice_id: { type: mongoose.Schema.Types.ObjectId, ref: "Choice" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Result = mongoose.model("Result", ResultSchema);

export default Result;
