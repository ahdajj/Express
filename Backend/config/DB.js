const mongoose = require('mongoose')
require('dotenv').config()


const dburl = process.env.DB_URL
mongoose.connect(dburl)
.then(()=> console.log('DB is connected'))
.catch((err)=>console.log(err))