
// storing user data on localstorage in the form of objects
let btn=document.querySelector('.fbtn');
let form=document.querySelector('#form');
let ul=document.querySelector('#ul')
var datas = document.querySelectorAll(".inputs")
let vara=true;
btn.addEventListener('click',()=>{
    if(vara)
     showOutput();   
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})

function showOutput(){
    let users={
        name:datas[0].value,
        email:datas[1].value,
        phoneNo:datas[2].value

    }
   axios.post('https://crudcrud.com/api/df21f1885be943108687f24b0a1ba860/appointment',{
    name:datas[0].value,
    email:datas[1].value,
    phoneNo:datas[2].value
   }).then((res)=> {newContent()
    datas[0].value=''
    datas[1].value=''
    datas[2].value=''})
   .catch(err=> console.log(err))
}

  
    window.addEventListener('DOMContentLoaded',()=>{
        axios.get('https://crudcrud.com/api/df21f1885be943108687f24b0a1ba860/appointment')
        .then((res)=> {
            for( let i=0;i<res.data.length;++i){
                showOnScreen(res.data[i]);
            }
        })
        .catch(err=> console.log(err))
    })

    function newContent(){
        axios.get('https://crudcrud.com/api/df21f1885be943108687f24b0a1ba860/appointment')
        .then((res)=> {
            ul.innerHTML='';
            for( let i=0;i<res.data.length;++i){
                showOnScreen(res.data[i]);
            }
        })
        .catch(err=> console.log(err))
    }



 function showOnScreen(users){
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
        deleteData(users,li,button,editBtn);
        // newContent()
 })

  //edit Button functionality
  editBtn.addEventListener('click',()=>{
    editData(users,li,button,editBtn)
  })
 }

 function deleteData(users,li,button,editBtn){
 localStorage.removeItem(users.email);
    ul.removeChild(li);
    ul.removeChild(button)
    ul.removeChild(editBtn);
    axios.delete(`https://crudcrud.com/api/df21f1885be943108687f24b0a1ba860/appointment/${users._id}`)
    .then((res)=>{
        newContent()
    }).catch((err)=> console.log(err))
 }

 function editData(users,li,button,editBtn){
    vara=false;
    console.log('edit');
    ul.removeChild(li);
    ul.removeChild(button);
    ul.removeChild(editBtn);
   
    datas[0].value=users.name;
    datas[1].value=users.email;
    datas[2].value=users.phoneNo;
    console.log('edit');
    btn.addEventListener('click',()=>{
        axios.put(`https://crudcrud.com/api/df21f1885be943108687f24b0a1ba860/appointment/${users._id}`,{
            name:datas[0].value,
            email:datas[1].value,
            phoneNo:datas[2].value
        })
        .then((res)=>{
            console.log(res);
      newContent()
      vara=true;
        }).catch(err=> console.log(err))
    })

    localStorage.removeItem(users.email);
 }
