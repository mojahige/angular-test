import Express from 'express'
import HTTP from 'http'
import SocketIO from 'socket.io'

const app = Express()
const http = HTTP.createServer(app)
const socketIO = SocketIO(http)

socketIO.on('connection', socket => {
  let query = socket.handshake.query
  let hoge = query.hoge

  console.log({ query, hoge })

  socket.on('disconnect', () => {})
  socket.on('on_name', data => socketIO.emit('emit_name', { data: data }))
})

http.listen(5000, () => {
  console.log('open')
})
