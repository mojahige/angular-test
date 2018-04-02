import Express from 'express'
import HTTP from 'http'
import SocketIO from 'socket.io'
import Rx from 'rxjs'

const app = Express()
const http = HTTP.createServer(app)
const socketIO = SocketIO(http)
const messages = []
const users = []

socketIO.on('connection', socket => {
  // let query = socket.handshake.query
  // let hoge = query.hoge

  // console.log(socket)

  socket.on('disconnect', () => {})

  socket.on('pushMessage', data => {
    messages.push(data)
    console.log(messages)
    socketIO.emit('pushedMessage', messages)
  })

  socket.on('pushUser', data => {
    if (users.some(user => user.nickname === data.nickname)) {
      socketIO.emit('pushedUser', null)
    } else {
      data.id = users.length + 1
      users.push(data)
      console.log(users)
      socketIO.emit('pushedUser', data)
    }
  })
})

http.listen(5000, () => {
  console.log('open')
})
