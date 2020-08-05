const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Notes = mongoose.model("Note");

// Get requests
router.get("/", (req, res) => {
  res.send("Index page");
});

router.get("/singlepost", (req, res) => {
  res.send("Individual post");
});

// POST requests
router.post("/createnote", (req, res) => {
  res.send("creating a route page");
});

module.exports = router;
