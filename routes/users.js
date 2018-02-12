var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Add new routes in here.
// Routes added here will have the prefix "/users/"

// Example of a new route at "/users/cool"
router.get('/cool', function(req, res, next) {
  res.send("You're a cool user");
});

// Exporting this module allows it to be accessed by app.js
module.exports = router;
