let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    pageTitle: 'aDilworld | Full Stack Developer Web/Mobile/Desktop & Technical Lead',
    title: 'Welcome',
    subtitle: 'Your visit is valueable to me'
  });
});

module.exports = router;
