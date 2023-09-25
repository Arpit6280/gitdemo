
// let btn=document.querySelector('.fbtn');
// let form=document.querySelector('#form');
// btn.addEventListener('click',()=>{
//     var datas = document.querySelectorAll(".inputs")
//     localStorage.setItem('name',datas[0].value);
//     localStorage.setItem('email',datas[1].value);
//     localStorage.setItem('phone No.',datas[2].value);
// })


// storing user data on localstorage in the form of objects
let btn=document.querySelector('.fbtn');
let form=document.querySelector('#form');
let ul=document.querySelector('#ul')
btn.addEventListener('click',()=>{
    var datas = document.querySelectorAll(".inputs")
    let button=document.createElement('button');
    button.id='btn';
    button.innerText='Delete'
    let li=document.createElement('li');
    li.innerText=`${datas[0].value}  ${datas[1].value} ${datas[2].value}  `
    ul.appendChild(li);
    ul.appendChild(button);
    ul.appendChild(document.createElement('br'))
    li.style.color='white';
    li.style.display='inline';
    let users={
        name:datas[0].value,
        email:datas[1].value,
        phoneNo:datas[2].value

    }
   let modifyUsers=JSON.stringify(users);
   localStorage.setItem(datas[1].value,modifyUsers);

   // delete button functionality
   button.addEventListener('click',(e)=>{
    ul.removeChild(li);
    ul.removeChild(button)
})
   
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})
