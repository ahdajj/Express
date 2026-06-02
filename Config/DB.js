require('dotenv').config()
const mongoose=require('mongoose')
const dburl = process.env.DB_URL

mongoose.connect(dburl)
.then((result)=> console.log('Db connected'))  
.catch((err)=> console.log(err));