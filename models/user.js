const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  savedJobs: [{
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;