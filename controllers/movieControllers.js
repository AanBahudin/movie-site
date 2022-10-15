const {StatusCodes} = require('http-status-codes')
const axios = require('axios')

const baseURL = `https://api.themoviedb.org/3`


const getFeature = async(req, res) => {
    const {type, feature} = req.params
    // console.log(type, feature);
    // console.log(`${baseURL}/${url}api_key=${process.env.API_KEY}`);
        // const test = feature === 'trending' ? `${feature}/${type}/week?` : `${type}/${feature}?`
        // console.log(test);
    
    try {
        const url = feature === 'trending' ? `${feature}/${type}/week?` : `${type}/${feature}?`
        const response = await axios.get(`${baseURL}/${url}api_key=${process.env.API_KEY}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error.data);
    }
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
    getFeature,
}