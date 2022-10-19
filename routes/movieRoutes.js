const express = require('express')
const router = express.Router()
const { getSingleMovies, searchMovies, getFeatureMovie, getFeatureTv } = require('../controllers/movieControllers')

router.route('/featured/movie/:feature/:page')
    .get(getFeatureMovie)

router.route('/featured/tv/:feature/:page')
    .get(getFeatureTv)

router.route('/:type/:id')
    .get(getSingleMovies)

router.route('/search')
    .get(searchMovies)


module.exports = router