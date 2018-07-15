let express = require('express');
let router = express.Router();
const { BG_ARR } = require('../config');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    pageTitle: 'M.@dil | Full Stack Developer Web/Mobile/Desktop & Technical Lead',
    logo: 'M.@dil',
    background: BG_ARR[Math.floor(Math.random() * BG_ARR.length)],
    title: 'Welcome',
    subtitle: 'Your visit is valueable to me'
  });
});

module.exports = router;
