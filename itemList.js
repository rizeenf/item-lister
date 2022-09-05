let form = document.getElementById('form');
let itemList = document.getElementById('items');
let search = document.getElementById('searchBox');
let searchBtn = document.getElementById('search');


form.addEventListener('submit', addItemList)
itemList.addEventListener('click', removeItem)
// search.addEventListener('keyup', searching)
searchBtn.addEventListener('click', searching2)

function addItemList(e){
  e.preventDefault();
  
  // Get input 
  let inputData = document.getElementById('input');

  // Create Element
  let li = document.createElement('li');
  // Add Class
  li.className = 'list-group-item';
  // AppendText
  li.appendChild(document.createTextNode(input.value));

  // Create Button
  let deleteBtn = document.createElement('button');
  // Add Class Button
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
  // Append Button Text
  deleteBtn.appendChild(document.createTextNode('X'));


  // Append to li
  li.appendChild(deleteBtn);
  // Append to ul
  items.appendChild(li)

  // console.log(li);
}

function removeItem(e){

  if(e.target.classList.contains('delete')){
    // createEle
    let newEle = document.createElement('li');
    // addClass
    newEle.className = 'text-center btn';
    // appendText
    newEle.appendChild(document.createTextNode('Are you sure?'))

    
    // Create Button
    let checkBtn = document.createElement('button');
    // Add Class Button
    checkBtn.className = 'btn btn-outline-success btn-sm float-end ps-3 pe-3 ms-1 check ';
    // Append Button Text
    checkBtn.appendChild(document.createTextNode('YES'));

    // Create Button
    let deleteBtn = document.createElement('button');
    // Add Class Button
    deleteBtn.className = 'btn btn-outline-danger btn-sm float-end ps-3 pe-3 ms-1 cancel';
    // Append Button Text
    deleteBtn.appendChild(document.createTextNode('NO'));

    // append button Yes or No
    newEle.appendChild(deleteBtn)
    newEle.appendChild(checkBtn)

    // append warning text
    itemList.appendChild(newEle)
    

    return deleteItem = e.target.parentElement;
  }
  if(e.target.classList.contains('check')){
    let li = e.target.parentElement;

    // deleteItem from list 
    deleteItem.remove();
    li.remove();

  }else if(e.target.classList.contains('cancel')){
    let li = e.target.parentElement;

    // cancel delete item from list
    li.remove();
  }

}
// SEARCHING 1 WITHOUT BUTTON SEARCH
// function searching(e){
//   let compare_1 = e.target.value.toLowerCase()

//   let listItem = itemList.getElementsByTagName('li');


//   Array.from(listItem).forEach(function(items){
//     let item = items.textContent;

//     if(item.toLowerCase().indexOf(compare_1) != -1 ){
//       items.style.display = 'block';
//     }else {
//       items.style.display = 'none';
//     }
//   })

// }


// SEARCHING WITH BUTTON SEARCH
function searching2(e){
  // get value from search box
  let compare_1 = search.value.toLowerCase();

  // get item list from List Item:
  let listItem = itemList.getElementsByTagName('li')

  // convert to Array, from HTMLCollection
  Array.from(listItem).forEach(function(items){
    let item = items.textContent;
  // until here
  
  // Compare value from Search box, with item from List Item:
  // if ok, show display, if none display change to none
    if(item.toLowerCase().indexOf(compare_1) != -1 ){
      items.style.display = 'block';
    }else {
      items.style.display = 'none';
    }
  })

  // console.log(listItem)

}