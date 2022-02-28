module.exports = (io, socket) => {
    const newPlayer = () => {
        socket.player = {
            id: socket.lastPlayderID++,
        }
        socket.emit('newplayer', socket.player)
        //socket.broadcast.emit('newplayer',socket.player)
    }

    const disconect = () => {
        io.emit('remove',socket.player.id)
    }

    socket.on("user:new", newPlayer)
    socket.on("user:disconect", disconect)
     
}