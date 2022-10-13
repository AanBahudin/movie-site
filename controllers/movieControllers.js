const {StatusCodes} = require('http-status-codes')
const axios = require('axios')

const baseURL = `https://api.themoviedb.org/3`

const getAllMovies = async(req, res) => {
    try {
        const response = await axios.get(baseURL)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
    res.send('get all movies controllers')
}

const getTrendingMovie = async(req, res) => {
    const {type} = req.params
    try {
        const response = await axios.get(`${baseURL}/trending/${type}/week?api_key=${process.env.API_KEY}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }
}

const getSingleMovies = async(req, res) => {
    res.send('get single movies controllers')
}

const searchMovies = async(req, res) => {
    res.send('get search movies controllers')
}

module.exports = {
    getAllMovies,
    getSingleMovies,
    searchMovies,
    getTrendingMovie
}