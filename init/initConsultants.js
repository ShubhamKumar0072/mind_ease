// initConsultants.js
const mongoose = require("mongoose");
const Consultant = require("../models/consultent");

const MONGO_URI = "mongodb://127.0.0.1:27017/mind_ease";

async function initConsultants() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

const consultants = [
  {
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Shubham Kumar",
    address: "123 MG Road, Delhi, India",
    phone: "9876543210",
    email: "shubham.kumar@example.com",
    qualification: "M.A. in Clinical Psychology",
    experience: 6,
    preWork: "AIIMS Delhi",
    experties: ["Trauma-related", "Stress Management", "CBT"],
    languages: ["Hindi", "English"],
    price: 29
  },
  {
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Ananya Sharma",
    address: "45 Park Street, Kolkata, India",
    phone: "9123456789",
    email: "ananya.sharma@example.com",
    qualification: "Ph.D. in Counseling Psychology",
    experience: 8,
    preWork: "Fortis Healthcare",
    experties: ["Anxiety Disorders", "Adolescent Therapy", "Family Counseling"],
    languages: ["English", "Bengali", "Hindi"],
    price: 35
  },
  {
    profile: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Rahul Mehta",
    address: "78 Residency Road, Bengaluru, India",
    phone: "9988776655",
    email: "rahul.mehta@example.com",
    qualification: "M.Phil in Clinical Psychology",
    experience: 10,
    preWork: "NIMHANS",
    experties: ["Depression", "Addiction Recovery", "Cognitive Therapy"],
    languages: ["English", "Kannada", "Hindi"],
    price: 40
  },
  {
    profile: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Priya Nair",
    address: "56 Marine Drive, Mumbai, India",
    phone: "9098765432",
    email: "priya.nair@example.com",
    qualification: "M.A. in Applied Psychology",
    experience: 5,
    preWork: "Tata Memorial Hospital",
    experties: ["Grief Counseling", "Workplace Stress", "Mindfulness"],
    languages: ["English", "Malayalam", "Hindi"],
    price: 27
  },
  {
    profile: "https://randomuser.me/api/portraits/men/84.jpg",
    name: "Arjun Verma",
    address: "21 Civil Lines, Lucknow, India",
    phone: "9345678123",
    email: "arjun.verma@example.com",
    qualification: "Ph.D. in Behavioral Psychology",
    experience: 12,
    preWork: "Apollo Hospitals",
    experties: ["Behavioral Disorders", "Anger Management", "Couples Therapy"],
    languages: ["Hindi", "English", "Urdu"],
    price: 45
  }
];

module.exports = consultants;


    // Clear old data and insert new
    await Consultant.deleteMany({});
    await Consultant.insertMany(consultants);

    console.log("✅ 5 psychologist consultants inserted successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  }
}

initConsultants();
