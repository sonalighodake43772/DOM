// queryselector
// var header=document.querySelector("#main-header");
// header.style.borderBottom="solid 2px black";

// var input=document.querySelector('input');
// input.value='enter name';

// var title=document.querySelector('.title');
// title.style.fontWeight='bold';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display='none';




// queryselectorall

// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].style.fontStyle='italic';
// titles[1].style.fontStyle='italic';

var sitem=document.querySelectorAll('.list-group-item');
console.log(sitem);
sitem[1].style.color='green';

// for  odd items
var odd =document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

// for even items
/*var even =document.querySelectorAll('li:nth-child(even)');
console.log(odd);
for(var i=0;i<even.length;i++)
{
    even[i].style.backgroundColor='darkkhaki';
}*/