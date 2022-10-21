const {StatusCodes} = require('http-status-codes')
const axios = require('axios')

const baseURL = `https://api.themoviedb.org/3`

const getFeatureMovie = async(req, res) => {
    const {feature, page} = req.params
    try {
        const url = feature === 'trending' ? `${feature}/movie/week?` : `movie/${feature}?`
        const response = await axios.get(`${baseURL}/${url}api_key=${process.env.API_KEY}&page=${page}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }
}
const getFeatureTv = async(req, res) => {
    const {feature, page} = req.params

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${feature}?api_key=${process.env.API_KEY}&page=${page}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }
}

const getSingleMovies = async(req, res) => {
    const {type, id} = req.params
    try {
        const response = await axios.get(`${baseURL}/${type}/${id}?api_key=${process.env.API_KEY}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: `can't find movie/tv with id ${id}`})
    }
}

const searchAll = async(req, res) => {
    const {title, page} = req.query
    console.log(title, page);
    try {
        const response = await axios.get(`${baseURL}/search/multi?api_key=${process.env.API_KEY}&page=${page}&include_adult=false&query=${title}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSingleMovies,
    searchAll,
    getFeatureMovie,
    getFeatureTv
}