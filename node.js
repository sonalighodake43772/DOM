var itemlist=document.querySelector('#items');
// parentnode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='grey';
console.log(itemlist.parentNode.parentNode.parentNode);


// parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='grey';
console.log(itemlist.parentElement.parentElement.parentElement);


// childnodes
//  console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='darkkhaki';

// firstchild
console.log(itemlist.firstChild);
// firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.style.fontWeight='bold';


// lastchild
 console.log(itemlist.lastChild);
// lastelementchild
itemlist.lastElementChild.textContent='hello4';


// nextsibling
console.log(itemlist.nextSibling);
// nextelementsibling
console.log(itemlist.nextElementSibling);


// previoussibling
console.log(itemlist.previousSibling);
// peviouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='blue';


// createelement
var newdiv=document.createElement('div');
console.log(newdiv);
// add class
newdiv.className='hello';
// add id
newdiv.id='hllo2';
// add attr
newdiv.setAttribute('title','welcome');


// create textnode
var newdivtext=document.createTextNode('HEllo word');
// add text to div
newdiv.appendChild(newdivtext);
console.log(newdivtext);


// add hello word before item lister
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);



// add hello world before item1
 var items=document.getElementById('items');
 console.log(items);
items.innerHTML='<li class="list-group-item">HEllo word</li><li class="list-group-item">Item1</li><li class="list-group-item">Item2</li><li class="list-group-item">Item3</li><li class="list-group-item">Item4</li>';

 















