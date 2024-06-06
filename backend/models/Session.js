import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  enteringCode: { type: String, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Session = mongoose.model("Session", SessionSchema);

export default Session;
