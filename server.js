const config = require('./config/config')

const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { /* options */ })

const registerUserHandlers = require("./handlers/users")

const onConnection = (socket) => {  
  registerUserHandlers(io, socket)
}

io.on("connection", onConnection);

app.get('/',function(req,res){
    res.send('Socket.io server')
})

httpServer.listen( config.port || 5000,function(){ // Listens to 8081
    console.log('Listening on '+httpServer.address().port)
})