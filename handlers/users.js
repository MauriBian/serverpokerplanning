var lastPlayerID = 1

module.exports = (io, socket) => {
    const newPlayer = () => {
        socket.lastPlayderID = lastPlayerID
        socket.player = {
            id: lastPlayerID,
        }
        socket.emit('newplayer', socket.player)
        lastPlayerID ++
        //socket.broadcast.emit('newplayer',socket.player)
    }

    const disconect = () => {
        io.emit('remove',socket.player.id)
    }

    socket.on("user:new", newPlayer)
    socket.on("user:disconect", disconect)
     
}