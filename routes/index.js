var express = require('express');
var router = express()
const isAuthenticated = require('../middleware/auth')

const email = 'admin@gmail.com'
const password = '123'

router.get('/home', isAuthenticated, (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.render('home', { email: req.session.email });
});

router.get('/', isAuthenticated, (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.render('home', { email: req.session.email });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
router.post('/', (req, res) => {
  try {
    if (email == req.body.email && password == req.body.password) {
      req.session.email = email;
      res.redirect('/');
    } else {
      res.render('index', { message: 'Something went wrong!' });
    }
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;
