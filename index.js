const express = require('express')
const routes = require('./Config/routes')

const app = express()
const port = 3000


routes(app)

app.listen(port)