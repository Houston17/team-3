const mongoose = require('mongoose');

const trainingModuleSchema = new mongoose.Schema({
  video: String;
  description: String;
  completed: Boolean
});

const TrainingModule = mongoose.model('TrainingModule', trainingModuleSchema);

module.exports = TrainingModule;
