const NEWPOST = require("../models/NewPost")
const fs = require("fs")

exports.getAllPost = async (req, res) => {
  const npost = await NEWPOST.find({}).sort("-dateCreated")
  res.render("index", { npost })
}

exports.getPost = async (req, res) => {
  const postdetail = await NEWPOST.findById(req.params.id)
  res.render("post", { postdetail })
}

exports.createPost = async (req, res) => {
  await NEWPOST.create(req.body)
  res.redirect("/")
}
exports.updatePost = async (req, res) => {
  const npost = await NEWPOST.findOne({ _id: req.params.id })
  npost.title = req.body.title
  npost.description = req.body.description
  npost.save()
  res.redirect(`/postDetail/${req.params.id}`)
}
exports.deletePost = async (req, res) => {
    await NEWPOST.findByIdAndRemove(req.params.id);
    res.redirect("/");
}