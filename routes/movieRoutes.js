const express = require('express')
const router = express.Router()
const { getSingleMovies, searchMovies, getFeature } = require('../controllers/movieControllers')

router.route('/featured/:type/:feature')
    .get(getFeature)

router.route('/:id')
    .get(getSingleMovies)

router.route('/search')
    .get(searchMovies)


module.exports = router