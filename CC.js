
const express=require('express');
const app = express();

app.listen(3000)

app.get('/',(req,res) =>{
    res.sendFile('./views/index.html',{root: __dirname});            // with sendfile we must spicify path root (--dirname mean this folder'Express')
});

app.get('/about',(req,res) =>{
    res.sendFile('./views/about.html',{root: __dirname});
});

// redirect
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

app.use((req,res)=>{                                                       // we use .use to handle request for not mentioned urls (in the above .get)
    res.status(404).sendFile('./views/404.html',{root:__dirname})          // .status to inform the broser there is error
})



