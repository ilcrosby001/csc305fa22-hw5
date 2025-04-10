var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homework 5, CSC 305 Database Design, Fall 2022' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  req.app.locals.formdata = req.body;
  renderIndex(req, res, next, ' ');
  //res.render('index', { title: ' POST' });
});


function renderIndex(req, res, next, title) {
  req.app.locals.formdata = req.body; // If there's any form data, put it where it can be passed on
  res.render('index', {title: title,
                       formdata: req.app.locals.formdata});


}


module.exports = router;
