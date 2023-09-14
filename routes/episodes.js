const express = require('express');
const router = express.Router();
const episodesCtrl = require('../controllers/episodes');

// Route to list all episodes
router.get('/episodes', episodesCtrl.index);

// Route to view a specific episode
router.get('/episodes/:id', episodesCtrl.show);

// Route to display a form for creating a new episode
router.get('/episodes/new', episodesCtrl.new);

// Route to create a new episode
router.post('/episode', episodesCtrl.create);

// Route to display a form for editing an episode
router.get('/episodes/:id/edit', episodesCtrl.edit);

// Route to delete an episode
router.delete('/episodes/:id', episodesCtrl.delete);

module.exports = router;
