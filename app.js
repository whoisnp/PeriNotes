const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

// mongoose.connect(MONGOURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on("connected", () => {
//   console.log("Conneted to mongoDB");
// });
// mongoose.connection.on("error", () => {
//   console.log("error in connecting", err);
// });

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
