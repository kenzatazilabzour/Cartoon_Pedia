const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  releaseDate: Date,
  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  },

});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
