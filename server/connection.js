const playerConected = function (server, io) {
  server.lastPlayderID = 0; // Keep track of the last id assigned to a new player

  io.on('connection',(socket) => {
      socket.on('newplayer',() => {
          socket.player = {
              id: server.lastPlayderID++,
          }
          socket.emit('allplayers',getAllPlayers());
          socket.broadcast.emit('newplayer',socket.player);
          console.log(server.lastPlayderID)
      })

      socket.on('disconnect',function(){
        io.emit('remove',socket.player.id);
    });
  })
}

function getAllPlayers(){
  var players = [];
  Object.keys(io.sockets.connected).forEach((socketID) => {
      var player = io.sockets.connected[socketID].player;
      if(player) players.push(player);
  });
  return players;
}

module.exports = {
  playerConected
}





