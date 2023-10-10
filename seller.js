let form = document.getElementById('form');
let productname= document.getElementById('pName');
let price = document.querySelector('#price');
let lists= document.getElementById('list')
let section = document.getElementById('section');
let total=0;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios.post('https://crudcrud.com/api/0345a31473834aa3aa135afc551dbb2b/products',{
        name:productname.value,
        price:price.value
    })
    .then((res)=>{
        showProducts();
    })
    .catch(err=> console.log(err))
})

window.addEventListener('DOMContentLoaded',()=>{
    showProducts();
})

  function showProducts(){
    axios.get('https://crudcrud.com/api/0345a31473834aa3aa135afc551dbb2b/products')
    .then((res)=>{
        lists.innerHTML='';
        section.innerHTML='';
        total=0;
        for(let i=0;i<res.data.length;++i){
            console.log(typeof(res.data[i].price));
            total+=parseInt(res.data[i].price);
            showOnScreen(res.data[i]);
        }
        section.innerHTML=`<h3>Total Worth Of Products: ₹${total}</h3>`
        console.log(total);
    })
    .catch(err=> console.log(err))
  }

function showOnScreen(products){
    let button=document.createElement('button');
    button.id='btn';
    button.innerText='Delete Product'
    let li=document.createElement('li');
    li.innerText=`${products.name}: ₹${products.price} `
    lists.appendChild(li);
    lists.appendChild(button);
    lists.appendChild(document.createElement('br'))

    button.addEventListener('click',()=>{
        deleteProduct(products,li,button)
    })
}

function deleteProduct(products,li,button){
    lists.removeChild(li);
    lists.removeChild(button)
    axios.delete(`https://crudcrud.com/api/0345a31473834aa3aa135afc551dbb2b/products/${products._id}`)
    .then((res)=>{
        showProducts()
    }).catch((err)=> console.log(err))
   console.log(products._id);
}
