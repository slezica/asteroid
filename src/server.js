'use strict'
import 'babel-register'

import r from 'rethinkdb'
import express from 'express'

// SETUP

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

let db // initialized later


app.use(express.static('dist'))


io.on('connection', socket => {

  r.table('movies').changes({ include_initial: true }).run(db).then(cursor => {
    socket.on('disconnect', () => cursor.close())
    cursor.each(onDataUpdate) // see below
  })

  function onDataUpdate(error, change) {
    if (error) return console.error(error.stack)

    socket.emit('ACTION', {
      type : 'UPDATE',
      id   : change.new_val ? change.new_val.id : change.old_val.id,
      value: change.new_val
    })
  }
})


r.connect().then(connection => {
  db = connection
  server.listen(3000)
})
