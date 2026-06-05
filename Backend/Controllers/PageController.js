
const Post = require ('../Models/Post')

const HomePage=(req,res)=>{
    res.status(200).send('Home')
}

const GetPosts=(req,res)=>{
    Post.find()
    .then((posts)=>{
        res.status(200).json(posts)})
}
const CreatePost= (req,res)=>{
    console.log(req.body)
    const newPost=new Post(req.body)
    newPost.save()
    .then(()=>res.send('saved'))
    .catch((err)=>console.log(err))
}
module.exports={
    HomePage,
    CreatePost,
    GetPosts
}