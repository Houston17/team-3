const mongoose = require('mongoose');

const feedPostSchema = new mongoose.Schema({
  title: String,
  date: String,
  fromEvent: mongoose.Schema.ObjectId;
  text: String,
  numUsers: Number
});

const FeedPost = mongoose.model('FeedPost', feedPostSchema);

module.exports = FeedPost;
