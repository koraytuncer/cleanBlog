const express = require('express')
const ejs = require('ejs')
const path = require('path')


const app = express()

//Template Engine
app.set("view engine", "ejs")

//Middleware
app.use(express.static("public"))



//Routes
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/add", (req, res) => {
    res.render("add_post")
})
app.get("/add", (req, res) => {
    res.render("post")
})



const port = 5000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışmaya başladı..`)
})