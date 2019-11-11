const express = require('express')
const router = express.Router()
const BG_ARR = require('../config')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    pageTitle:
      '@dil | FullStack Developer Web/Mobile/Desktop/DevOps & Technical Lead',
    logo: '@dil',
    background: BG_ARR[Math.floor(Math.random() * BG_ARR.length)],
    title: 'Hi, Welcome, Your visit is valuable to me.',
    subtitle:
      'I am a FullStack developer Web, Mobile, Desktop, DevOps and Technical Lead of your next idea.'
  })
})

module.exports = router
