/*console.log(document);
console.log(document.domain);
console.log(document.URL);
 console.log(document.doctype);
 console.log(document.title);
//  document.title='items';
 console.log(document.head);
 console.log(document.body);
 console.log(document.all);
 console.log(document.all[10]);
//  document.all[10].textContent="lists"
 console.log(document.forms);
 console.log(document.links);
 console.log(document.images);



//  getelementbyID
// change title
// console.log(document.getElementById('items'));
//  console.log(document.getElementById('header-title'));
var it=document.getElementById('items');
console.log(it);
var headertitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headertitle);
headertitle.textContent='hello';
headertitle.innerText='basic list';
headertitle.innerHTML='<h3>basic list</h3>';
header.style.borderBottom='solid 3px black';

// change add item

var title=document.getElementById('title');
console.log(title);
title.style.fontWeight='bold';
title.style.color='green';*/





// get element byclassname
/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent='hello';

// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='red';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}   

// for(var i=0;i<items.length;i++)
// {
    
//     items[i].style.backgroundColor='yellow';
// }
// gives error
// items.style.backgroundColor='red';*/




// getelementbytagname
var li=document.getElementsByTagName('li');
console.log(li);
li[1].textContent='hello';

 li[1].style.fontWeight='bold';

li[2].style.backgroundColor='green';
li[4].style.fontWeight='bold';
li[4].style.color='green';

// by using classname li tag does not have any effect bcz it not have class
var li=document.getElementsByClassName('li');
console.log(li);
li[4].style.fontWeight='bold';
li[4].style.color='green';









 
 
