//EXAMINE THE DOCUMENT OBJECT

console.log(document);
console.log(document.domain);
console.log(document.title);
document.title="Modified Item Lister";

console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.all[10]);

let headerTitle=document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// headerTitle.innerHTML='<h1>HELLO</h1>'

let header=document.getElementById('main-header');
header.style.borderBottom='solid 3px black'

let addItem=document.querySelector('.title');
//console.log(addItem);
addItem.style.fontSize='bold';
addItem.style.color='green';
