const express = require('express')
const Feed = require('../model/Feed')
const routes = express.Router() 
const FeedController = require('../controler/FeedController.')



routes.get('/',(req,res)=>{res.redirect('/feed')})
routes.get('/feed', FeedController.FeedHome)
routes.get('/feed/:id',FeedController.FeedDetails )
routes.get('/feed/edit/:id', FeedController.EditPage)

routes.post('/feed' ,FeedController.FeedCreate)
routes.post('/feed/edit/:id',FeedController.FeedEdit )

routes.delete('/feed/:id', FeedController.FeedDelete)

module.exports=routes