const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

//routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));

//add static
app.use(express.static("public"));

//init server
app.listen(port, () => console.log("Server running in http://localhost:" + port));