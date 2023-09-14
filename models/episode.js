const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  releaseDate: Date,
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  }],

});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
