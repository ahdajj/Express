

const display=document.querySelector('.div')
const form=document.querySelector('.post')


fetch('http://localhost:3000/Posts' , {
    method: 'GET',
})
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        // let x=document.createElement('h1')
        // x.innerHTML=`${element.title}`
        // display.appendChild(x)
        display.innerHTML+=`<h1> Title : ${element.title}</h1> <p> this is the text :${element.text}</p>`
    });

})
.catch(err=>console.log(err))

form.addEventListener('submit',function (e){
    e.preventDefault()
    let input1=e.target.title.value
    let input2 =e.target.text.value
    fetch('http://localhost:3000/newPost',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title:input1,text:input2})
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
})



