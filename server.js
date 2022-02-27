const serverConnection = require('./server/connection')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server);

serverConnection.playerConected(server, io)

app.get('/',function(req,res){
    res.send('Socket.io server')
});

server.listen(8081,function(){ // Listens to 8081
    console.log('Listening on '+server.address().port);
});