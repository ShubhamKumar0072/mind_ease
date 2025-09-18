const express = require("express");
const app = express();
let port = 8080;
const mongoose = require("mongoose");
const Consultant = require("./models/consultent");
const User = require("./models/user");
const Institute = require("./models/institute");

const path = require("path");
app.set("views",path.join(__dirname,"/views"));
const ejsMate = require("ejs-mate");
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//MongoDB Setup
main().then(() => {
  console.log("Successfully Connected to Database");
})
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mind_ease");
}



app.get("/",(req,res)=>{
    res.render("pages/home.ejs");
});

// Route to render all psychologists
app.get("/booking", async (req, res) => {
  try {
    const psychologists = await Consultant.find();
    //res.send(psychologists);
    res.render("pages/bookList.ejs", { psychologists });
  } catch (err) {
    res.status(500).send("Error fetching psychologists");
  }
});

// Route to render detail of a particular psychologist by ID
app.get("/psychologists/:id", async (req, res) => {
  try {
    const psychologist = await Consultant.findById(req.params.id);

    if (!psychologist) {
      return res.status(404).send("Psychologist not found");
    }
    res.send(psychologist);
    //res.render("psychologistDetail", { psychologist });
  } catch (err) {
    res.status(500).send("Error fetching psychologist details");
  }
});

// GET one user by id and render EJS
app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("institute"); 
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render('pages/profile.ejs', { user }); // Pass data to EJS file
    //res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

















app.listen(port,()=>{
    console.log("listning from port",port);
});