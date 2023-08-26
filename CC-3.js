//Middleware

// next middleware
/*
const express=require('express');
const app = express();
app.set('view engine','ejs');   

app.listen(3000)

app.use((req,res , next)=>{
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();                               // with out next the browser will get stuck at the present syntax(app.use) and the webpage will stuck this happens because we didnt send a responce 
});


app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('2-index' , {title: 'home' , blog: blogs});       // the value we passed for title and blog , will be output in the ejs syntax in index.ejs       
});
           // the next function will not be excuted because the previous fun (syntax) send a response and will not read the rest of the code
app.use((req,res , next)=>{
    console.log('in the next middleware');
    next();   
});         

app.get('/about',(req,res) =>{
    res.render('2-about',{title: 'about'});
});

app.get('/create',(req,res)=>{
    res.render('2-create', {title: 'creat'})
})
app.use((req,res)=>{                                                       
    res.status(404).render('2-404',{title: '404'} )     
})
*/

// Morgan middleware 
   // we have to install morgan first npm install morgan 
/*
const express=require('express');
const app = express();
app.set('view engine','ejs');
const morgan = require('morgan')   

app.listen(3000)

app.use(morgan('dev'));

app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('2-index' , {title: 'home' , blog: blogs});      
});

app.get('/about',(req,res) =>{
    res.render('2-about',{title: 'about'});
});

app.get('/create',(req,res)=>{
    res.render('2-create', {title: 'creat'})
})
app.use((req,res)=>{                                                       
    res.status(404).render('2-404',{title: '404'} )     
})
*/

// middleware and static files  
   // its useful to add Css files the old way by <link ....> n html file  

const express=require('express');
const app = express();
app.set('view engine','ejs');  

app.listen(3000)

app.use(express.static('public'))    // now we put the css file in the public folder and link it to our html (watch the last video in rescoursec)

app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('2-index' , {title: 'home' , blog: blogs});      
});

app.get('/about',(req,res) =>{
    res.render('2-about',{title: 'about'});
});

app.get('/create',(req,res)=>{
    res.render('2-create', {title: 'creat'})
})
app.use((req,res)=>{                                                       
    res.status(404).render('2-404',{title: '404'} )     
})
