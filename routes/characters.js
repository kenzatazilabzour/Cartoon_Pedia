const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Display the list of all characters
router.get('/', charactersCtrl.index);

// Display the form for creating a new character
router.get('/new', ensureLoggedIn, charactersCtrl.new);

// Handle the creation of a new character
router.post('/new', ensureLoggedIn, charactersCtrl.create);

// Display the form for editing a character
router.get('/:id/edit', ensureLoggedIn, charactersCtrl.edit);

// Handle the update of a character
router.put('/:id', ensureLoggedIn, charactersCtrl.update);

// Display the character profile
router.get('/:id', charactersCtrl.view);

router.delete('/:id', ensureLoggedIn, charactersCtrl.delete);

module.exports = router;
