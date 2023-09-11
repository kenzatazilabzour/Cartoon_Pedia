var express = require('express');
var router = express.Router();
const cartoonsCtrl = require('../controller/cartoons');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', cartoonsCtrl.index);
 router.get('/new', ensureLoggedIn, cartoonsCtrl.new);
// router.get('/:id', cartoonsCtrl.show);
// router.post('/', ensureLoggedIn, cartoonsCtrl.create);

module.exports = router;
