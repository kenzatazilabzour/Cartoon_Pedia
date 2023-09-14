const Character = require('../models/character');

module.exports = {
  index,
  new: newCharacter,
  create,
  edit,
  update,
  view,
  delete: deleteCharacter,
};

async function index(req, res) {
  try {
    const characters = await Character.find();
    res.render('characters/index', { title: 'All Characters', characters });
  } catch (error) {
    res.status(500).send('Error listing characters');
  }
}

async function newCharacter(req, res) {
  const error = ''
  res.render('characters/new', { title: 'Add Character', error });
}

async function create(req, res) {
  const { name, image, biography, superpowers, famousQuotes } = req.body;

  const character = new Character({
    name,
    image,
    biography,
    superpowers,
    famousQuotes,
  });

  try {
    await character.save();
    res.redirect('/characters');
  } catch (error) {

    res.render('characters/new', { title: 'Add Character', error });
  }
}

async function edit(req, res) {
  const character = await Character.findById(req.params.id);

  if (!character) {
    res.status(404).send('Character not found');
  } else {
    res.render('characters/edit', { title: 'Edit Character', character });
  }
}

async function update(req, res) {
  const { name, image, biography, superpowers, famousQuotes } = req.body;

  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      {
        name,
        image,
        biography,
        superpowers,
        famousQuotes,
      },
      { new: true }
    );

    if (!character) {
      res.status(404).send('Character not found');
    } else {
      res.redirect(`/characters/${character._id}`);
    }
  } catch (error) {
    res.render('characters/edit', { title: 'Edit Character', error });
  }
}

async function view(req, res) {
  const character = await Character.findById(req.params.id);

  if (!character) {
    res.status(404).send('Character not found');
  } else {
    res.render('characters/profile', { title: 'Character Profile', character });
  }
}

async function deleteCharacter(req, res) {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);

    if (!character) {
      res.status(404).send('Character not found');
    } else {
      res.redirect('/characters');
    }
  } catch (error) {
    res.status(500).send('Error deleting character');
  }
}
