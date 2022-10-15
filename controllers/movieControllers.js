const {StatusCodes} = require('http-status-codes')
const axios = require('axios')

const baseURL = `https://api.themoviedb.org/3`

const getFeatureMovie = async(req, res) => {
    const {feature} = req.params
    try {
        const url = feature === 'trending' ? `${feature}/movie/week?` : `movie/${feature}?`
        const response = await axios.get(`${baseURL}/${url}api_key=${process.env.API_KEY}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }
}

const getFeatureTv = async(req, res) => {
    const {feature} = req.params
    console.log(feature);

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${feature}?api_key=${process.env.API_KEY}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }

    // try {
    //     const url = feature === 'trending' ? `${feature}/tv/week?` : `tv/${feature}?`
    //     const response = await axios.get(`${baseURL}/${url}api_key=${process.env.API_KEY}`)
    //     res.status(StatusCodes.OK).json(response.data)
    // } catch (error) {
    //     console.log(error);
    // }
}

const getSingleMovies = async(req, res) => {
    res.send('get single movies controllers')
}

const searchMovies = async(req, res) => {
    res.send('get search movies controllers')
}

module.exports = {
    getSingleMovies,
    searchMovies,
    getFeatureMovie,
    getFeatureTv
}