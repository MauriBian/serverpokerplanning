const serverConnection = require('./server/connection')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server);
const config = require('./config/config')

serverConnection.playerConected(server, io)

app.get('/',function(req,res){
    res.send('Socket.io server')
})

server.listen( config.port || 5000,function(){ // Listens to 8081
    console.log('Listening on '+server.address().port)
})