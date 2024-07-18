const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = 2222
const router = require('./routes/index')

require('dotenv').config()




server.use(bodyParser.json());





server.get('/echo', (req, res, next) => {


  res.send(req.query.echo)


})

server.use('/', router)










server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})