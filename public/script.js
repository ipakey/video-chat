const socket = io('/')

socket.emit('join-room', ROOM_ID, 10)

socket.on('used-connected', userId => {
    console.log('user connected: ' + userId )
})