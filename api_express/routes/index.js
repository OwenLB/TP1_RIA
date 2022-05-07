var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h2>Bienvenu sur <strong>API Node/Express du TP1 de RIA</strong></h2>');
});

module.exports = router;