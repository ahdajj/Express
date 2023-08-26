// npm insall ejs


/*
const express=require('express');
const app = express();
app.set('view engine','ejs');    // register view engine

app.listen(3000)

app.get('/',(req,res) =>{
    res.render('index');        // express will search the views file automatically and send index to the browser     
});

app.get('/about',(req,res) =>{
    res.render('about');
});

app.get('/create',(req,res)=>{
    res.render('create')
})
app.use((req,res)=>{                                                       
    res.status(404).render('404')     
})
*/


// passing data (note: we also make changes to files in views using ejs syntaxes)
/*
const express=require('express');
const app = express();
app.set('view engine','ejs');   

app.listen(3000)

app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index' , {title: 'home' , blog: blogs});       // the value we passed for title and blog , will be output in the ejs syntax in index.ejs       
});

app.get('/about',(req,res) =>{
    res.render('about',{title: 'about'});
});

app.get('/create',(req,res)=>{
    res.render('create', {title: 'creat'})
})
app.use((req,res)=>{                                                       
    res.status(404).render('404',{title: '404'} )     
})
*/


// EJS templates  (partials)
  // we creat partials folder and seperate the previous ejs files (index,about ,...) to parts
  // we use <%-include%> to add the seperated parts to each other 
  // then we put the CSS styles in the head  ( we cant use <link...> like we used to do ( in the CC-3 file there is a way to do that))

const express=require('express');
const app = express();
app.set('view engine','ejs');   

app.listen(3000)

app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('2-index' , {title: 'home' , blog: blogs});       // the value we passed for title and blog , will be output in the ejs syntax in index.ejs       
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
