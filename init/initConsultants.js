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
        name: "Dr. Ananya Kapoor",
        address: "12 Connaught Place, New Delhi",
        phone: "9876543210",
        email: "ananya.kapoor@example.com",
        qualification: "PhD in Clinical Psychology",
        experience: 10,
        preWork: "Worked at AIIMS Delhi as a student counselor, specialized in stress management for college students",
        specialization: "Psychologist - Student Mental Health"
      },
      {
        name: "Rahul Sen",
        address: "56 Ballygunge Road, Kolkata",
        phone: "9123456780",
        email: "rahul.sen@example.com",
        qualification: "M.Phil in Counseling Psychology",
        experience: 8,
        preWork: "Provided therapy sessions at Presidency University for anxiety and depression among students",
        specialization: "Psychologist - Student Mental Health"
      },
      {
        name: "Dr. Meera Pillai",
        address: "22 Anna Nagar, Chennai",
        phone: "9988776655",
        email: "meera.pillai@example.com",
        qualification: "PhD in Child & Adolescent Psychology",
        experience: 12,
        preWork: "Served as mental health consultant at IIT Madras, focused on exam stress and peer pressure",
        specialization: "Psychologist - Student Mental Health"
      },
      {
        name: "Kavya Joshi",
        address: "78 FC Road, Pune",
        phone: "9090909090",
        email: "kavya.joshi@example.com",
        qualification: "M.Sc in Clinical Psychology",
        experience: 6,
        preWork: "Worked with NGOs conducting workshops on coping with failure and building self-confidence in students",
        specialization: "Psychologist - Student Mental Health"
      },
      {
        name: "Dr. Arvind Nair",
        address: "34 MG Road, Bangalore",
        phone: "9012345678",
        email: "arvind.nair@example.com",
        qualification: "PhD in Behavioral Psychology",
        experience: 15,
        preWork: "Senior counselor at NIMHANS, guided students with anxiety, addiction, and social adjustment issues",
        specialization: "Psychologist - Student Mental Health"
      }
    ];

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
