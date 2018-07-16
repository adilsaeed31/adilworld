let express = require('express');
let router = express.Router();
const { BG_ARR } = require('../config');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    pageTitle: '@dil | Full Stack Developer Web/Mobile/Desktop & Technical Lead',
    logo: '@dil',
    background: BG_ARR[Math.floor(Math.random() * BG_ARR.length)],
    title: 'Hi, Welcome, Your visit is valueable to me.',
    subtitle: 'I am, Fullstack developer Web/Mobile/Desktop & Technical Lead.'
  });
});

module.exports = router;
