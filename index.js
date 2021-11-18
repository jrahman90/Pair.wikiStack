const morgan = require('morgan')
const express = require('express')
const main = require('./views/main')
const PORT = 1337

const app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    let emptyString = 'empty';
    res.send(main(emptyString))
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})