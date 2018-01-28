var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const counter = req.app.db.counter;
  let doc = await counter.findOneAndUpdate({ name: 'visits' }, { $inc: { count: 1 } });
  if (!doc) {
    doc = await counter.create({ name: 'visits', count: 1 });
  }
  res.render('index', { title: 'Express', visits: doc.count });
});

module.exports = router;
