var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/create', (req, res) => {
  res.render('create');
 });


module.exports = router;

