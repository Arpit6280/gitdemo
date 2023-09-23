//let itemList=document.querySelector('#items');

// parentnode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);  // childNodes also count line break if we writing another in next line then it add text as index

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';

// //firstChild
// console.log(itemList.firstChild);

 //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

 //lastChild
// console.log(itemList.lastChild);

 //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 1';

//nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'


//createElement

// let newDiv=document.createElement('div');

// newDiv.className='hello'
// newDiv.id='hello1';

// //add attributes
// newDiv.setAttribute('title','Hello Div');

// // create text node
// let newDivText=document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// let container=document.querySelector('header .container');
// let h1=document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv,h1);

// let lis=document.querySelector('.list-group-item');

// let h2=document.createElement('h2');
// h2.innerText='Hello World'
// console.log(lis);
// lis.insertAdjacentElement('beforebegin',h2)

