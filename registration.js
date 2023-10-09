
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
    let editBtn=document.createElement('button');
    editBtn.id='ebtn';
    editBtn.innerText='Edit';
    button.id='btn';
    button.innerText='Delete'
    let li=document.createElement('li');
    li.innerText=`${datas[0].value}  ${datas[1].value} ${datas[2].value}`
    ul.appendChild(li);
    ul.appendChild(button);
    ul.appendChild(editBtn)
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
    localStorage.removeItem(users.email);
    ul.removeChild(li);
    ul.removeChild(button)
    ul.removeChild(editBtn);
})


  //edit Button functionality
  editBtn.addEventListener('click',()=>{
    ul.removeChild(li);
    ul.removeChild(button);
    ul.removeChild(editBtn);
   
    datas[0].value=users.name;
    datas[1].value=users.email;
    datas[2].value=users.phoneNo;
    localStorage.removeItem(users.email);
  })
   
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})

