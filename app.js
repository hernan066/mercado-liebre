require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

//routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));

//add static
app.use(express.static("public"));

//init server
app.listen(process.env.PORT || port , () => console.log("Server running"));