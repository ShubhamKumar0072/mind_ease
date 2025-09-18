const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
  profile:{
    type: String,
    require: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^[0-9]{10}$/, "Phone number must be 10 digits"]
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  qualification: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: Number,
    required: true,
    min: 0
  },
  preWork: {
    type: String,
    required: true,
    trim: true
  },
  experties: {      
    type: [String],
    required: true,
    trim: true
  },
  languages: {          
    type: [String],
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Consultant = mongoose.model("Consultant", consultantSchema);

module.exports = Consultant;
