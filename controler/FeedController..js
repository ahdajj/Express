const Feed = require('../model/Feed')



const FeedHome = (req,res)=>{
        Feed.find()
        .sort({Create_at : -1})
        .then(data => {
               res.render('index' , {feeds:data})
        })
        .catch(err =>{
            console.log(err)
        })
    }

const FeedDetails = (req,res)=>{
    const id = req.params.id
    Feed.findById(id)
    .then(data=>{
        res.render('display', {feeds:data})
    })
    .catch(err =>{
        console.log(err)
    })
    
}

const EditPage =(req,res)=>{
    const id= req.params.id
    Feed.findById(id)
    .then(data=>{
        res.render('edit',{feeds:data})
    })
}

const FeedCreate =  (req,res)=>{
    const Newfeed = new Feed(req.body)
    Newfeed.save()
    .then(()=>{
        res.redirect('/feed')
    })
    .catch(err =>{
        console.log(err)
    })
}

const FeedEdit = (req,res)=>{
    const id = req.params.id
    Feed.findByIdAndUpdate(id , req.body)
    .then(()=>{
        res.redirect('/feed')
    })
    .catch(err=>{
        console.log(err)
    })
}

const FeedDelete = (req,res)=>{
    const id = req.params.id;
    Feed.findByIdAndDelete(id)
     .then(result=>{                  
        res.json({redirect:'/feed'})
     })
     .catch(err => {
        console.log(err)
     })
}
module.exports ={
                FeedHome,
                FeedDetails,
                EditPage,
                FeedCreate,
                FeedEdit,
                FeedDelete
}