const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

require('dotenv').config()
const port = process.env.SERVER_PORT || 8080
const app = express()
mongoose.connect(process.env.MONGO_URI)

app.use(express.json())
app.use(routes)
app.listen(port, () => console.log(`Express server currently running on port ${port}`))
