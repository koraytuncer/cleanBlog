const mongoose = require("mongoose")
const Schema = mongoose.Schema

//create schemac
const PostSchema = new Schema({
  title: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  }
})

const NEWPOST = mongoose.model("NEWPOST", PostSchema)

module.exports = NEWPOST