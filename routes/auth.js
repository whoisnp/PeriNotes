const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/signup", (req, res) => {
  res.send("signup page");
});

router.post("/signin", (req, res) => {
  res.send("signup page");
});

module.exports = router;
