require('dotenv').config()

const express = require('express')
const app = express()


const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(process.env.PORT || 3001, () => {
    console.log('🚀');
})