const mongoose =require('mongoose')
const moment =require('moment/moment')

const Schema = mongoose.Schema ;
const postSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    text:{
      type:String,
      required:true
  },
    creat_at:{
      type:Date,
      default:Date.now,
      get:function(createAt){
        return moment (createAt) .format ("DD/MM-MM:HH")
      }
    }
})
const Post = mongoose.model("Post", postSchema)
module.exports = Post