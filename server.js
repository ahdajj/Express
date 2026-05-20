const express = require('express')
require('./config/mongo')
const route = require('./config/route')
const app = express()
require('dotenv').config();


let port = process.env.PORT
app.listen(port , console.log('app is on'))


app.set('view engine','ejs');  
app.use(express.static('public')) ;
app.use(express.urlencoded({extended:true}))

app.use(route)

