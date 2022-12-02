const winston = require('winston')
const express = require('express')

require('dotenv').config()

const app = express()

require('./startup/logging')()
require('./startup/routes')(app)
require('./startup/db')()

const port = process.env.PORT || 3000

app.listen(port, () => winston.info(`Servidor corriendo en http://localhost:${port}`))