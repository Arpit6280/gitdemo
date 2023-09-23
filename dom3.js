var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// form.addEventListener('submit',addDescription);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// adding description;

let item2 = document.getElementById('item')
  console.log('hi');
  let input2=document.createElement('input');
  input2.className='form-control mr-2'
  input2.id='item2';

  item2.insertAdjacentElement('afterend',input2);



// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;
  console.log(newItem2);

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createElement('br'));
  li.appendChild(document.createTextNode(newItem2));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);




  // add edit button
  let editBtn=document.createElement('button');
  editBtn.className="mr-1 btn btn-success btn-sm float-right";

  editBtn.innerText='Edit';
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
 
  //addDescription();
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  console.log(items);
  // Convert to an array
  Array.from(items).forEach(function(item){
    console.log(item.childNodes[2].textContent);
    var itemName = item.firstChild.textContent;
    var itemName2=item.childNodes[2].textContent;
    if((itemName.toLowerCase().indexOf(text) != -1) || (itemName2.toLowerCase().indexOf(text)!=-1)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}





