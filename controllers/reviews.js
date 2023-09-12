
module.exports = {
  create,
  // Add this export
  delete: deleteReview
};

async function create(req, res) {
  const character = await Characters.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  characters.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await character.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/characters/${characters._id}`);
}

async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const characters = await Characters.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!characters) return res.redirect('/characters');
  // Remove the review using the remove method available on Mongoose arrays
  characters.reviews.remove(req.params.id);
  // Save the updated movie doc
  await characters.save();
  // Redirect back to the movie's show view
  res.redirect(`/characters/${characters._id}`);
}
