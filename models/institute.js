const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  noOfStudents: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
