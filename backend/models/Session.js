const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  enteringCode: { type: String, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Session", SessionSchema);
