
// storing user data on localstorage in the form of objects
let btn=document.querySelector('.fbtn');
let form=document.querySelector('#form');
let ul=document.querySelector('#ul')
btn.addEventListener('click',()=>{
  showOutput();   
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})

function showOutput(){
    var datas = document.querySelectorAll(".inputs")
    let users={
        name:datas[0].value,
        email:datas[1].value,
        phoneNo:datas[2].value

    }
   axios.post('https://crudcrud.com/api/bfdd50eedf2d4684875e3332679ad514/appointment',{
    name:datas[0].value,
    email:datas[1].value,
    phoneNo:datas[2].value
   }).then((res)=> console.log(res))
   .catch(err=> console.log(err))
   showOnScreen(users,datas);
}


 function showOnScreen(users,datas){
    let button=document.createElement('button');
    let editBtn=document.createElement('button');
    editBtn.id='ebtn';
    editBtn.innerText='Edit';
    button.id='btn';
    button.innerText='Delete'
    let li=document.createElement('li');
    li.innerText=`${users.name}  ${users.email} ${users.phoneNo}`
    ul.appendChild(li);
    ul.appendChild(button);
    ul.appendChild(editBtn)
    ul.appendChild(document.createElement('br'))
    li.style.color='white';
    li.style.display='inline';

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
 }


 
   


// function deleteData(li,users){
//     localStorage.removeItem(users.email);
//     ul.removeChild(li);
//     ul.removeChild(button)
//     ul.removeChild(editBtn);
// }

// function editData(li){
//     ul.removeChild(li);
//     ul.removeChild(button);
//     ul.removeChild(editBtn);
   
//     datas[0].value=users.name;
//     datas[1].value=users.email;
//     datas[2].value=users.phoneNo;
//     localStorage.removeItem(users.email);
// }