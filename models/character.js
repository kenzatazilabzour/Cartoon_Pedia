const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  biography: String,
  superpowers: [String],
  famousQuotes: [String],
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
