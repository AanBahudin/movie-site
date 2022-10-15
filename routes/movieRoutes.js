const express = require('express')
const router = express.Router()
const { getSingleMovies, searchMovies, getFeatureMovie, getFeatureTv } = require('../controllers/movieControllers')

router.route('/featured/movie/:feature')
    .get(getFeatureMovie)

router.route('/featured/tv/:feature')
    .get(getFeatureTv)

router.route('/:id')
    .get(getSingleMovies)

router.route('/search')
    .get(searchMovies)


module.exports = router