const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// Route to list all users
router.get('/', userCtrl.listUser);

// Route to view a specific user
router.get('/user/:id', userCtrl.viewUser);

// Route to display a form for creating a new user
router.get('/user/new', userCtrl.newUser);

// Route to create a new user
router.post('/', userCtrl.createUser);

module.exports = router;
