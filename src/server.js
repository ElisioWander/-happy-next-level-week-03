//inport dependence
const express = require('express')
const path = require('path')

//start server
const server = express()


server
//using static files
.use(express.static('public'))

//configure template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//create route
.get('/', (req, res) => {
    return res.render('index')
})



//open server
server.listen(5000)