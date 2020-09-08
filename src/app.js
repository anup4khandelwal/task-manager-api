const express = require('express')
require('./db/mongoose')
const userRoute = require('./routes/users')
const taskRoute = require('./routes/tasks')

const app = express()


app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

module.exports = app