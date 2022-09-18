var form =document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// forem submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click',removeitem);
// filter evevnt
filter.addEventListener('keyup',filteritem);

// add item
function addItem(e)
{
    e.preventDefault();
   
// get input value
var newitem=document.getElementById('item').value;
var newitemS=document.getElementById('iteme').value;
// create new element li
var li=document.createElement('li');
// add class
li.className='list-group-item';
// add textnode to inpt value
li.appendChild(document.createTextNode(newitem));
li.appendChild(document.createTextNode(newitemS));
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
editbtn.appendChild(document.createTextNode('EDIT'));
li.appendChild(editbtn);

}


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

// filteritem

function filteritem(e)
{
    // CONVERT TO LOWERCASE
    var text=e.target.value.toLowerCase();
    console.log(text);
    // GET LI
    var items=itemList.getElementsByTagName('li');
    console.log(items);
    // convert to an array
    Array.from(items).forEach(function(item){
var itemname=item.firstChild.textContent;
var itemnames=item.childNodes[1].textContent;
if(itemname.toLowerCase().indexOf(text)!=-1 || itemnames.toLowerCase().indexOf(text)!=-1)
{
    item.style.display='block';

}else
{
    item.style.display='none';
}

      });
    
    
}