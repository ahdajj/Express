const express = require('express');
const mongoose = require('mongoose');
const router = require('./Config/Routes')
const app = express();
const cookieParser = require('cookie-parser')
require('./Config/DB')
require('dotenv').config()

const port = process.env.PORT
app.listen(port , ()=>{console.log(`Server is on Port ${port}`)})


app.set('view engine','ejs');  


app.use(express.static('public')) 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(router)




