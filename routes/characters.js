const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Display the list of all characters
router.get('/', charactersCtrl.listCharacters);

// Display the form for creating a new character
router.get('/new', ensureLoggedIn, charactersCtrl.newCharacter);

// Handle the creation of a new character
router.post('/new', ensureLoggedIn, charactersCtrl.createCharacter);

// Display the form for editing a character
router.get('/:id/edit', ensureLoggedIn, charactersCtrl.editCharacter);

// Handle the update of a character
router.post('/:id/edit', ensureLoggedIn, charactersCtrl.updateCharacter);

// Display the character profile
router.get('/:id', charactersCtrl.viewCharacter);

module.exports = router;
