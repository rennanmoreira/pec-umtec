const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const jsonServer = require('json-server')

const port = process.env.PORT || 8080
const portServer = process.env.PORT_SERVER || 3000

const app = express()
const server = jsonServer.create()
const router = jsonServer.router('server/db.json')

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

server.use(jsonServer.defaults())
server.use(router)

app.listen(port)
server.listen(portServer)

console.log(`app is listening on port: ${port}`)
console.log(`server is listening on port: ${portServer}`)