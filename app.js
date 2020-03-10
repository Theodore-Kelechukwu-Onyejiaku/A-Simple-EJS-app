const express = require("express");
const app = express();

//a simple rendering of an EJS template engine
app.get("/", (req, res)=>{
    res.render("index.ejs")
})

//Passing values to template engine
app.get("/user/:id/:username", (req, res)=>{
    const username = req.params.username;
    const id = req.params.id;
    res.render("user.ejs", {
        username : username,
        id: id
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully on port:"+PORT)
})