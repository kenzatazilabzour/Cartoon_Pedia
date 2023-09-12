const express = require('express');
const router = express.Router();
const episodeControllers = require('../controllers/episode');

//Route to view a specific episode
// router.get('/:episodeId', episodeControllers.viewEpisode);

//Route to create a new episode (only accessible to contributors and admins)
// router.get('/new', ensureContributorOrAdmin, episodeControllers.createEpisode);
// router.post('/new', ensureContributorOrAdmin, episodeControllers.saveEpisode);

//Add more episode-related routes as needed, such as editing, listing, or deleting episodes

module.exports = router;
