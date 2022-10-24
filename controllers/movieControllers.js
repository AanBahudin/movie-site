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
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: 'cannot perform this request, try again later!'})
    }
}
const getFeatureTv = async(req, res) => {
    const {feature, page} = req.params

    try {
        const response = await axios.get(`${baseURL}/tv/${feature}?api_key=${process.env.API_KEY}&page=${page}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: 'cannot perform this request, try again later!'})
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

const getCollection = async(req, res) => {
    const {id} = req.params

    if(typeof id === 'undefined'){
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: "This movie doesn't have any collection"})
    }

    try {
        const response = await axios.get(`${baseURL}/collection/${id}?api_key=${process.env.API_KEY}`)
        if (!response.data) {
            res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Something is wrong, Try again later!'})
        }
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: 'Try again later!'})
    }
}

const getTvSeason = async(req, res) => {
    const {tv_id, season_number} = req.params
    console.log(tv_id, season_number);

    try {
        const response = await axios.get(`${baseURL}/tv/${tv_id}/season/${season_number}?api_key=${process.env.API_KEY}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: 'Try again later!'})
    }
} 

const searchAll = async(req, res) => {
    const {title, page} = req.query
    try {
        const response = await axios.get(`${baseURL}/search/multi?api_key=${process.env.API_KEY}&page=${page}&include_adult=false&query=${title}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        req.status(StatusCodes.BAD_REQUEST).json({success: false, msg: `Cannot find movie / tv series with keyword: ${title}`})
    }
}

module.exports = {
    getSingleMovies,
    searchAll,
    getFeatureMovie,
    getFeatureTv,
    getCollection,
    getTvSeason   
}