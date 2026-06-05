require('./config/DB')
const express = require('express')
const app = express()
const Route = require('./config/Route')
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT
app.listen(port ,()=> console.log(`local host is on : ${port}`) )

app.set('view engine','ejs')
app.use(express.json()) 

app.use(cors())
app.use(Route)