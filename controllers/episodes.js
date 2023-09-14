const Episode = require('../models/episode');
const Character = require('../models/character');

module.exports = {
  index,
  show,
  create,
  new: newEpisode,
  edit,
  delete: deleteEpisode,
};

// Display a list of all episodes
async function index(req, res) {
  try {
    const episodes = await Episode.find({});
    res.render('episode/index', { title: 'All Episodes', episodes });
  } catch (error) {
    res.status(500).send('Error listing episodes');
  }
}

// Display details for a specific episode
async function show(req, res) {
  const episode = await Episode.findById(req.params.id).populate('characters');

  if (!episode) {
    res.status(404).send('Episode not found');
  } else {
    res.render('episode/show', { title: 'Episode Details', episode });
  }
}

// Create a new episode
async function newEpisode(req, res) {
  const characters = await Character.find({});
  res.render('episode/new', { title: 'Add Episode', characters});
}

async function create(req, res) {
  try {
    await Episode.create(req.body);
    res.redirect('/episodes');
  } catch (error) {
    res.render('episode/new', { title: 'Add Episode', error });
  }
}

async function edit(req, res) {
  const episodeId = req.params.id;

  try {
    const episode = await Episode.findById(episodeId);

    if (!episode) {
      return res.status(404).render('error', { title: 'Episode not found', message: 'Episode not found' });
    }
    res.render('episode/edit', { title: 'Edit Episode', episode });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { title: 'Error', message: 'Error fetching episode data' });
  }
}

async function deleteEpisode(req, res) {
  const episodeId = req.params.id;

  try {
    const episode = await Episode.findById(episodeId);

    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    await episode.remove();

    return res.status(200).json({ message: 'Episode deleted successfully' });
  } catch (error) {

    console.error(error);
    return res.status(500).json({ message: 'Error deleting episode' });
  }
}
