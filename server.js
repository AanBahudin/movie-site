require('dotenv').config()

// express
const express = require('express')
const app = express()

// external packages
const morgan = require('morgan')
const cors = require('cors')

// using external packages & middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// importing route
const movieRoute = require('./routes/movieRoutes')

// api route
app.use('/api/v1/movies', movieRoute)

// routes
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(process.env.PORT || 3001, () => {
    console.log('🚀');
})