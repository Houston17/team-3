const mongoose = require('mongoose');

const volEventSchema = new mongoose.Schema({
  time: String,
  location: String,
  volunteers: Array,
  training: Array
}, {timestamps: true});

const VolEvent = mongoose.model('VolEvent', volEventSchema);

module.exports = VolEvent;
