// init.js
const mongoose = require("mongoose");
const User = require("../models/user");

const MONGO_URI = "mongodb://127.0.0.1:27017/mind_ease"; 

async function init() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    // Example data (10 users)
    const users = [
      {
        username: "shubham01",
        name: "Shubham Kumar",
        roll: "101",
        email: "shubham01@example.com",
        DOB: new Date("2000-01-15"),
        institute: "ABC Institute"
      },
      {
        username: "anita02",
        name: "Anita Sharma",
        roll: "102",
        email: "anita02@example.com",
        DOB: new Date("2001-03-10"),
        institute: "ABC Institute"
      },
      {
        username: "rahul03",
        name: "Rahul Verma",
        roll: "103",
        email: "rahul03@example.com",
        DOB: new Date("2000-07-25"),
        institute: "XYZ University"
      },
      {
        username: "priya04",
        name: "Priya Singh",
        roll: "104",
        email: "priya04@example.com",
        DOB: new Date("1999-11-05"),
        institute: "XYZ University"
      },
      {
        username: "arjun05",
        name: "Arjun Mehta",
        roll: "105",
        email: "arjun05@example.com",
        DOB: new Date("2002-02-20"),
        institute: "LMN College"
      },
      {
        username: "kavya06",
        name: "Kavya Nair",
        roll: "106",
        email: "kavya06@example.com",
        DOB: new Date("2001-06-18"),
        institute: "LMN College"
      },
      {
        username: "rohit07",
        name: "Rohit Gupta",
        roll: "107",
        email: "rohit07@example.com",
        DOB: new Date("1999-12-30"),
        institute: "PQR Institute"
      },
      {
        username: "sneha08",
        name: "Sneha Iyer",
        roll: "108",
        email: "sneha08@example.com",
        DOB: new Date("2000-08-12"),
        institute: "PQR Institute"
      },
      {
        username: "vikas09",
        name: "Vikas Yadav",
        roll: "109",
        email: "vikas09@example.com",
        DOB: new Date("2001-04-01"),
        institute: "ABC Institute"
      },
      {
        username: "meera10",
        name: "Meera Rani",
        roll: "110",
        email: "meera10@example.com",
        DOB: new Date("2000-09-22"),
        institute: "XYZ University"
      }
    ];

    // Clear old data and insert new
    await User.deleteMany({});
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
