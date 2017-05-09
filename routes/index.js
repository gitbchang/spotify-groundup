var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/datavisual', function(req, res, next) {
  res.render('index', { title: 'Zones' });
});

router.get('/comments', function(req, res, next) {
  res.render('index', { title: 'Comments' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Page' });
});

module.exports = router;
