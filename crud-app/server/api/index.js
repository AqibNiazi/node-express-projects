require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("../src/database");

const {
  createUser,
  updateUser,
  getUsers,
  getUserBySlug,
  deleteUser,
} = require("../src/requests/userRequests");

const app = express();

// Connect DB (important)
database();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/users", getUsers);
app.get("/user/:slug", getUserBySlug);
app.post("/create-user", createUser);
app.put("/update-user/:id", updateUser);
app.delete("/delete-user/:id", deleteUser);

// ✅ Export app (NO listen)
module.exports = app;
