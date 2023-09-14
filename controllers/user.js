const User = require('../models/user');

module.exports = {
  index,
  view,
  create,
  new: newUser,
};

// Display a list of all users
async function index(req, res) {
  try {
    const users = await User.find();
    res.render('user/index', { title: 'All User', user });
  } catch (error) {
    res.status(500).send('Error listing users');
  }
}

// Display details for a specific user
async function view(req, res) {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.render('user/show', { title: 'User Profile', user });
  }
}

// Create a new user
async function create(req, res) {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password, // Make sure to hash the password before saving it in a production app
  });

  try {
    await user.save();
    res.redirect('/user');
  } catch (error) {
    res.render('user/new', { title: 'Add User', error });
  }
}

// Display a form to create a new user
async function newUser(req, res) {
  res.render('user/new', { title: 'Add User' });
}
