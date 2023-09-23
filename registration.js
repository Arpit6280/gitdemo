
let btn=document.querySelector('.fbtn');
let form=document.querySelector('#form');
btn.addEventListener('click',()=>{
    var datas = document.querySelectorAll(".inputs")
    localStorage.setItem('name',datas[0].value);
    localStorage.setItem('email',datas[1].value);
    localStorage.setItem('phone No.',datas[2].value);
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})