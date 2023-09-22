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


let items=document.getElementsByClassName('list-group-item');
// console.log(items);

// items[1].textContent='hello 2';
// items[1].style.fontWeight='bold';

items[2].style.backgroundColor='green'
for (const item of items) {
    item.style.fontWeight='bold';
}

let li=document.createElement('li');
li.innerText='Item5';
let ul=document.getElementsByTagName('ul');
console.log(ul);
ul[0].append(li);

li.style.padding='0.75rem 1.25rem';
li.style.listStyle='none';
li.style.border='1px solid rgba(0,0,0,0.125)';
li.style.fontWeight='bold';

