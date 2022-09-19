// loocalstorage
// localStorage.setItem('name','sonali');
// localStorage.getItem('name');
 // localStorage.removeItem('name');

//  sessionstorage
/*sessionStorage.setItem('name','fogg');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');

// cookies
document.cookie='name=john';*/


// form validation
const myForm = document.querySelector('#my-form');
const namein = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
  e.preventDefault();
  // instead of console add name and email to the localstorage

  // localStorage.setItem('name',namein.value);
  // localStorage.setItem('email',emailInput.value);


// add name and email to localstorage as a object

let userdetails=
  {
    name:namein.value,
    email:emailInput.value


  };
   localStorage.setItem(' userdetails',JSON.stringify(userdetails));

  if(namein.value==''||emailInput.value=='')
  {

     msg.classList.add('error');     /** it is used to add class or id from stylesheet */
    // alert('please enter all field');
    msg.innerHTML='please enter all field';
  }
}

  