var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bootstraptest', { title: 'Test' });
});

module.exports = router;
