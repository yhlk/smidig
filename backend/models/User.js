import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  session_id: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
});

const User = mongoose.model("User", UserSchema);

export default User;
