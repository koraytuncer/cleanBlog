const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const path = require('path')
const moment = require("moment");
const NEWPOST = require('./models/NewPost.js');


const app = express()

//connetc DB
mongoose.connect("mongodb://localhost/clean-blog-test-db")

//Template Engine
app.set("view engine", "ejs")

//Middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Date 
app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
  });

//Routes
app.get("/", async (req, res) => {
    const npost = await NEWPOST.find({})
    res.render("index",{npost})
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/add", (req, res) => {
    res.render("add_post")
})
app.get("/add_post", (req, res) => {
    res.render("post")
})

app.post("/npost", async (req, res) => {
    await NEWPOST.create(req.body)
    res.redirect('/')
})


const port = 5000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışmaya başladı..`)
})