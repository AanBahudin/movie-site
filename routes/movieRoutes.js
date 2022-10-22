const express = require('express')
const router = express.Router()
const { getSingleMovies, searchAll, getFeatureMovie, getFeatureTv, getCollection } = require('../controllers/movieControllers')

router.route('/featured/movie/:feature/:page')
    .get(getFeatureMovie)

router.route('/search/collection/:id') 
    .get(getCollection)

router.route('/featured/tv/:feature/:page')
    .get(getFeatureTv)

router.route('/:type/:id')
    .get(getSingleMovies)

router.route('/search')
    .get(searchAll)


module.exports = router