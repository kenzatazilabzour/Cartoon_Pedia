

module.exports = {
  index,
  new: newCartoon,
}

async function index(req, res) {
  res.render('cartoons/index', {title: 'All Cartoons'});
}

async function newCartoon(req, res) {
  res.render('cartoons/new', {title: 'Add Cartoon'});
}
