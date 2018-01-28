var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const counter = req.app.db.counter;
  let doc = await counter.findOneAndUpdate({ name: req.path }, { $inc: { count: 1 } });
  if (!doc) {
    doc = await counter.create({name: req.path});
  }
  console.log(doc);
  const count = doc.count;
  res.render('index', { title: 'Express', count });
});

module.exports = router;
