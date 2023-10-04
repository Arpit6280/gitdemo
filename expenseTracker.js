let form= document.getElementById('form');
let ul=document.getElementById('ul');
let keys = Object.keys(localStorage);


// Add previous expenses from localstorage
for(let i=0;i<keys.length;++i){
    let exp=localStorage.getItem(keys[i])
    exp=JSON.parse(exp)
    let li =document.createElement('li');
    li.style.color='white';
    li.style.display='inline';
    let inputs= document.getElementsByClassName('form-control');
    let category=document.getElementById('category');
    li.innerText=`${exp.amount} - ${exp.description} - ${exp.category}`
    let dltButton=document.createElement('button');
    let editBtn=document.createElement('button');
    editBtn.id='ebtn';
    editBtn.innerText='Edit';
    dltButton.id='dbtn';
    dltButton.innerText='Delete'
    ul.appendChild(li);
    ul.appendChild(editBtn);
    ul.appendChild(dltButton);
    ul.appendChild(document.createElement('br'))

        // delete button functionality
   dltButton.addEventListener('click',(e)=>{
    localStorage.removeItem(exp.description);
    ul.removeChild(li);
    ul.removeChild(dltButton)
    ul.removeChild(editBtn);
})

    //edit Button functionality
    editBtn.addEventListener('click',()=>{
    ul.removeChild(li);
    ul.removeChild(dltButton);
    ul.removeChild(editBtn);
   
    inputs[0].value=exp.amount;
    inputs[1].value=exp.description;
    category.value=exp.category;
    localStorage.removeItem(exp.description);
  })

}


// Add expenses from form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputs= document.getElementsByClassName('form-control');
    let category=document.getElementById('category');
    let dltButton=document.createElement('button');
    let editBtn=document.createElement('button');
    editBtn.id='ebtn';
    editBtn.innerText='Edit';
    dltButton.id='dbtn';
    dltButton.innerText='Delete'

    let expenses={
        amount:inputs[0].value,
        description:inputs[1].value,
        category:category.value
    }
    let modifyExpense= JSON.stringify(expenses);
    localStorage.setItem(inputs[1].value,modifyExpense);

   
    let li =document.createElement('li');
    li.style.color='white';
    li.style.display='inline';
    li.innerText=`${inputs[0].value} - ${inputs[1].value} - ${category.value}`

    // delete button functionality
   dltButton.addEventListener('click',(e)=>{
    localStorage.removeItem(expenses.description);
    ul.removeChild(li);
    ul.removeChild(dltButton)
    ul.removeChild(editBtn);
})

    //edit Button functionality
    editBtn.addEventListener('click',()=>{
    ul.removeChild(li);
    ul.removeChild(dltButton);
    ul.removeChild(editBtn);
   
    inputs[0].value=expenses.amount;
    inputs[1].value=expenses.description;
    category.value=expenses.category;
    localStorage.removeItem(expenses.description);
  })

    ul.appendChild(li);
    ul.appendChild(editBtn);
    ul.appendChild(dltButton);
    ul.appendChild(document.createElement('br'))
})