const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  savedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;