const express = require('express')

const server = express()
server.use('/', express.static(`${__dirname}/build`))
server.listen(process.env.PORT || 3000)
