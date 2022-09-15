console.log(document);
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
title.style.color='green';



 
 
