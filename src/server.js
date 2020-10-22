//inport dependence
const express = require('express')

//start server
const server = express()


server
//using static files
.use(express.static('public'))

//create route
.get('/', (req, res) => {
    return res.send('Tamo aqui!!')
})



//open server
server.listen(5000)