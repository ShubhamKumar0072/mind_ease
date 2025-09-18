const mongoose = require("mongoose");
const User = require("../models/user");
const Institute = require("../models/institute");

const MONGO_URI = "mongodb://127.0.0.1:27017/mind_ease";

async function init() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    // Step 1: Define 5 Institutes
    const institutes = [
      { name: "ABC Institute", address: "Delhi", noOfStudents: 2000 },
      { name: "XYZ University", address: "Mumbai", noOfStudents: 3500 },
      { name: "LMN College", address: "Bangalore", noOfStudents: 1500 },
      { name: "PQR Institute", address: "Chennai", noOfStudents: 1800 },
      { name: "DEF University", address: "Kolkata", noOfStudents: 2200 },
    ];

    // Step 2: Clear old data
    await User.deleteMany({});
    await Institute.deleteMany({});

    // Step 3: Insert Institutes
    const createdInstitutes = await Institute.insertMany(institutes);
    console.log("✅ Institutes inserted!");

    // Create a quick map for lookup by name
    const instMap = {};
    createdInstitutes.forEach(inst => {
      instMap[inst.name] = inst._id;
    });

    // Step 4: Define 10 Users with institute ObjectIds
    const users = [
      {
        username: "shubham01",
        name: "Shubham Kumar",
        roll: "101",
        email: "shubham01@example.com",
        DOB: new Date("2000-01-15"),
        institute: instMap["ABC Institute"]
      },
      {
        username: "anita02",
        name: "Anita Sharma",
        roll: "102",
        email: "anita02@example.com",
        DOB: new Date("2001-03-10"),
        institute: instMap["ABC Institute"]
      },
      {
        username: "rahul03",
        name: "Rahul Verma",
        roll: "103",
        email: "rahul03@example.com",
        DOB: new Date("2000-07-25"),
        institute: instMap["XYZ University"]
      },
      {
        username: "priya04",
        name: "Priya Singh",
        roll: "104",
        email: "priya04@example.com",
        DOB: new Date("1999-11-05"),
        institute: instMap["XYZ University"]
      },
      {
        username: "arjun05",
        name: "Arjun Mehta",
        roll: "105",
        email: "arjun05@example.com",
        DOB: new Date("2002-02-20"),
        institute: instMap["LMN College"]
      },
      {
        username: "kavya06",
        name: "Kavya Nair",
        roll: "106",
        email: "kavya06@example.com",
        DOB: new Date("2001-06-18"),
        institute: instMap["LMN College"]
      },
      {
        username: "rohit07",
        name: "Rohit Gupta",
        roll: "107",
        email: "rohit07@example.com",
        DOB: new Date("1999-12-30"),
        institute: instMap["PQR Institute"]
      },
      {
        username: "sneha08",
        name: "Sneha Iyer",
        roll: "108",
        email: "sneha08@example.com",
        DOB: new Date("2000-08-12"),
        institute: instMap["PQR Institute"]
      },
      {
        username: "vikas09",
        name: "Vikas Yadav",
        roll: "109",
        email: "vikas09@example.com",
        DOB: new Date("2001-04-01"),
        institute: instMap["DEF University"]
      },
      {
        username: "meera10",
        name: "Meera Rani",
        roll: "110",
        email: "meera10@example.com",
        DOB: new Date("2000-09-22"),
        institute: instMap["DEF University"]
      }
    ];

    // Step 5: Insert Users
    await User.insertMany(users);

    console.log("✅ 10 users inserted successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  }
}

init();
