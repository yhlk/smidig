const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const users = require("./routes/users");
const sessions = require("./routes/sessions");
const questions = require("./routes/questions");
const choices = require("./routes/choices");
const results = require("./routes/results");
const ratings = require("./routes/ratings");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//parse json and cross origin
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB here
const mongoUrl = process.env.MONGO_URL;
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
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
