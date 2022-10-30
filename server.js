const https = require('node:http')
const express = require('express')

const app = express()

const hostname = '127.0.0.1'
const port = process.env.PORT || 3001

const server = https.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end('Creating Node.js server!\n')
})

app.get('/', (req, res) => {
  console.log('hello on the default route')
  console.log('The request', req.query.hello)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
