const NEWPOST = require("../models/NewPost")

exports.getAboutPage = (req, res) => {
  res.render("about")
}
exports.getAddPage = (req, res) => {
  res.render("add_post")
}
exports.getEditPage = async (req, res) => {
  const npost = await NEWPOST.findOne({ _id: req.params.id })
  res.render("edit_post", { npost });
}
