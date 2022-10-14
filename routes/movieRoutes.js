const express = require('express')
const router = express.Router()
const { getAllMovies, getSingleMovies, searchMovies, getTrendingMovie, getTopRated } = require('../controllers/movieControllers')

router.route('/')
    .get(getAllMovies)

router.route('/trending/:type')
    .get(getTrendingMovie)

router.route('/top_rated/:type')
    .get(getTopRated)

router.route('/:id')
    .get(getSingleMovies)

router.route('/search')
    .get(searchMovies)


module.exports = router