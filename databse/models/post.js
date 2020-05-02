const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
});

module.exports = mongoose.model("Post", postSchema);
