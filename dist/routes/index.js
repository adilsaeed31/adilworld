"use strict";

var express = require('express');

var router = express.Router();

var BG_ARR = require('../config');
/* GET home page. */


router.get('/', function (req, res) {
  res.render('index', {
    pageTitle: '@dil | Full Stack Developer Web/Mobile/Desktop/DevOps & Technical Lead',
    logo: '@dil',
    background: BG_ARR[Math.floor(Math.random() * BG_ARR.length)],
    title: 'Hi, Welcome, Your visit is valuable to me.',
    subtitle: 'I am a Full Stack developer Web, Mobile, Desktop, DevOps and Technical Lead of your next idea.'
  });
});
module.exports = router;