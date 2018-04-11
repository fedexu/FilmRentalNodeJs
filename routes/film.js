var express = require('express');
var router = express.Router();
var path = require('path');

var db = require('../db');

router.get('/allFilms', function(req, res, next) {
  db.get().collection('film').find().toArray(function(err, result) {
    if(err) next(err);;
    
    res.send(result);
  });

});

module.exports = router;
