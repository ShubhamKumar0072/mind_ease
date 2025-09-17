const express = require("express");
const app = express();
let port = 8080;
const mongoose = require("mongoose");

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

















app.listen(port,()=>{
    console.log("listning from port",port);
});