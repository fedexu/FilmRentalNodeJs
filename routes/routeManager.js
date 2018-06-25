var express = require('express')
var router = express.Router()

router.use('/film', require('./film/film'));


module.exports = router