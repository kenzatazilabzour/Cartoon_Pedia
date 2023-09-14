const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// Route to list all users
router.get('/', userCtrl.index);

// Route to view a specific user
router.get('/user/:id', userCtrl.view);

// Route to display a form for creating a new user
router.get('/user/new', userCtrl.new);

// Route to create a new user
router.post('/', userCtrl.create);

module.exports = router;
