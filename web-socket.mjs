import Express from 'express'
import HTTP from 'http'
import SocketIO from 'socket.io'

const app = Express()
const http = HTTP.createServer(app)
const socketIo = SocketIO(http)

socketIo.on('connection', socket => {
  console.log('connected')

  let query = socket.handshake.query
  let hoge = query.hoge

  socket.on('disconnect', () => {})
  socket.on('on_name', data => socket_io.emit('emit_name', { data: data }))
})

http.listen(5000, () => {
  console.log('open')
})
