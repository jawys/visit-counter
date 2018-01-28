var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const counter = req.app.db.counter;
  let doc = await counter.findOneAndUpdate({ name: 'visits' }, { $inc: { count: 1 } }, { new: true });
  if (!doc) {
    doc = await counter.create({ name: 'visits', count: 1 });
  }
  res.render('index', { title: 'Visit Counter', visits: doc.count });
});

module.exports = router;
