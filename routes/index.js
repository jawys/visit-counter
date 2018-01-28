var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const counter = req.app.db.counter;
  counter.findOneAndUpdate({ name }, { $inc: { count: 1 } }, function (err, count, abc) {
    console.log(err, count, abc);
    res.render('index', { title: 'Express', count });
  });
});

module.exports = router;
