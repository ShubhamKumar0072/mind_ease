const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  roll: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  DOB: {
    type: Date,
    required: true
  },
  institute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",   // references the Institute model
    required: true
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
