var express = require('express');
var router = express.Router();
var path = require('path');

var db = require('../../db');

router.get('/allFilms', function (req, res, next) {
  db.get().collection('film').find().toArray(function (err, result) {
    if (err) next(err);
    console.log(result.length);
    res.send(result);
  });

});

router.get('/pagination/:startId/:finalId', function (req, res, next) {
  var startId = parseInt(req.params.startId);
  var finalId = parseInt(req.params.finalId);

  var query = { "film_id": { $gte: startId, $lte: finalId } };

  db.get().collection('film').find(query).toArray(function (err, result) {
    if (err) next(err);

    res.send(result);
  });

});

router.get('/detail/:id', function (req, res, next) {
  var filmId = parseInt(req.params.id);

  var query = { "film_id": filmId };

  db.get().collection('film').find(query).toArray(function (err, result) {
    if (err) next(err);

    res.send(result);
  });

});


module.exports = router;
