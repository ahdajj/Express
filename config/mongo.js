require('dotenv').config();


db_url=process.env.DB_URL
const mongoose=require('mongoose')
mongoose.connect(db_url)
.then(()=>{
    console.log(' db is connected')
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose