const express = require('express');
const router = express.Router();
const episodesCtrl = require('../controllers/episodes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Route to list all episodes
router.get('/', episodesCtrl.index);

// Route to display a form for creating a new episode
router.get('/new', ensureLoggedIn, episodesCtrl.new);

// Route to view a specific episode
router.get('/:id', episodesCtrl.show);

// Route to create a new episode
router.post('/', ensureLoggedIn, episodesCtrl.create);

// Route to display a form for editing an episode
router.get('/:id/edit', ensureLoggedIn, episodesCtrl.edit);

// Route to delete an episode
router.delete('/:id', ensureLoggedIn, episodesCtrl.delete);

module.exports = router;
