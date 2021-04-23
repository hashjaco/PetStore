#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app'
import debug from 'debug'
import http from 'http'

/**
 * Get port from environment and store in Express.
 */
const normalizePort = val => {
  const port = parseInt(val, 10)
  if(Number.isNaN(port)){
    // named pipe
    return val
  }
  if (port >= 0){
    // port number
    return port
  }
  return false
}

/**
 * Get port from environment and store in Express
 *  */
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Create HTTP server
 * */
const server = http.createServer(app)

/**
 * Event listener for HTTP server "error" event:
 * This helper function will listen for errors in our http server and display meaningful messages
 * */
const onError = error => {
  if(error.syscall !== 'listen'){
    throw error
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`
  // handle specific listen errors with friendly messages
  switch(error.code){
    case 'EACCES':
      alert(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      alert(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event:
 * This function simply outputs the port the server is listening on to the console
 * */
const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  debug(`Listening on ${bind}`)
}

/**
 * Listen for incoming requests at the specified address over provided port, on all network interfaces
 * */
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
