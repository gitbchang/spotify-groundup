var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login Page' });
});

router.get('/datavisual', function(req, res, next) {
  res.render('index', { title: 'Data Visuals' });
});

router.get('/favorites', function(req, res, next) {
  res.render('index', { title: 'Favorites' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Page' });
});

// router.get('*', function(req, res, next){
//   res.render('index', { title: 'About Page' });
// });

module.exports = router;
