const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const postController = require("./controllers/postController")
const pageController = require("./controllers/pageController")

const app = express()

//connetc DB
mongoose.connect("mongodb://localhost/clean-blog-test-db")

//Template Engine
app.set("view engine", "ejs")

//Middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
)

//Routes
app.get("/", postController.getAllPost)
app.get("/postDetail/:id", postController.getPost)
app.post("/npost", postController.createPost)
app.put("/npost/:id", postController.updatePost)
app.delete("/npost/:id", postController.deletePost)
app.get("/about", pageController.getAboutPage)
app.get("/add", pageController.getAddPage)
app.get("/npost/edit/:id", pageController.getEditPage)

const port = 5000
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışmaya başladı..`)
})
