
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
btn.addEventListener('click',()=>{
    var datas = document.querySelectorAll(".inputs")
    let users={
        name:datas[0].value,
        email:datas[1].value,
        phoneNo:datas[2].value

    }
   let modifyUsers=JSON.stringify(users);
    localStorage.setItem('users',modifyUsers);
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})