const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  session_id: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
});

module.exports = mongoose.model("User", UserSchema);
