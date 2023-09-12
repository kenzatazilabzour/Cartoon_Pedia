const express = require('express');
const router = express.Router();
const episodeController = require('../controller/episode');

// Route to view a specific episode
router.get('/:episodeId', episodeController.viewEpisode);

// Route to create a new episode (only accessible to contributors and admins)
router.get('/new', ensureContributorOrAdmin, episodeController.createEpisode);
router.post('/new', ensureContributorOrAdmin, episodeController.saveEpisode);

// Add more episode-related routes as needed, such as editing, listing, or deleting episodes

module.exports = router;
