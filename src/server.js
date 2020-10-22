//inport dependence
const express = require('express')

//start server
const server = express()

//create route
server.get('/', (req, res) => {
    return res.send('Tamo aqui!!')
})



//open server
server.listen(5000)