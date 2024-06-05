import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Import routes
import users from "./routes/users.js";
import sessions from "./routes/sessions.js";
import questions from "./routes/questions.js";
import choices from "./routes/choices.js";
import results from "./routes/results.js";
import ratings from "./routes/ratings.js";

const app = express();
const port = process.env.PORT || 5000;

//parse json and cross origin
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB here
const mongoUrl = process.env.MONGO_URL;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use routes
app.use("/api/users", users);
app.use("/api/sessions", sessions);
app.use("/api/questions", questions);
app.use("/api/choices", choices);
app.use("/api/results", results);
app.use("/api/ratings", ratings);

app.listen(port, () => console.log(`Server running on port ${port}`));
