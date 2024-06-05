import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

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

// Parse JSON and handle cross-origin requests
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "frontend", "build")));

// Use routes
app.use("/api/users", users);
app.use("/api/sessions", sessions);
app.use("/api/questions", questions);
app.use("/api/choices", choices);
app.use("/api/results", results);
app.use("/api/ratings", ratings);

// Catch-all handler to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// Connect to MongoDB
const mongoUrl = process.env.MONGO_URL;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
