var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const counter = req.app.db.counter;
  counter.updateCount(req.path, function (count) {
    console.log(count);
  });
  res.render('index', { title: 'Express', count });
});

module.exports = router;
