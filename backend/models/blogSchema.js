const mongoose = require("mongoose");

const blog = mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
});

const blogSchema = new mongoose.model("BlogSchema", blog);
module.exports = blogSchema;
