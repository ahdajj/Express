const express = require('express')
const route = express.Router()

const PageController = require('../Controllers/PageController')

route.get('/',PageController.HomePage)
route.get('/Posts',PageController.GetPosts)
route.post('/newPost',PageController.CreatePost)

module.exports = route