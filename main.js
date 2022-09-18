var form =document.getElementById('addForm');
var itemList=document.getElementById('items');

// forem submit event
form.addEventListener('submit',additem);
// delete event
itemList.addEventListener('click',removeitem);

function additem(e)
{
    e.preventDefault();
   
}

// get input value
var newitem=document.getElementById('item').value;

// create new element li
var li=document.createElement('li');
// add class
li.className='list-group-item';
// add textnode to inpt value
li.appendChild(document.createTextNode(newitem));
// add list to li
itemList.appendChild(li);


// craete delete btn
var deletebtn=document.createElement('button');
// add class
deletebtn.className='btn btn-danger btn-sm float-right delete';
// append to textnode
deletebtn.appendChild(document.createTextNode('X'));
li.appendChild(deletebtn);

// craete edit btn
var editbtn=document.createElement('button');
// add class
editbtn.className='btn  btn-sm float-right ';
// append to textnode
editbtn.appendChild(document.createTextNode('edit'));
li.appendChild(editbtn);




// remove item
function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }

    }

}
