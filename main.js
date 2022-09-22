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
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);



function onSubmit(e) {
  e.preventDefault();


  // instead of console add name and email to the localstorage

  // localStorage.setItem('name',namein.value);
  // localStorage.setItem('email',emailInput.value);


  // add name and email to localstorage as a object

  let userdetails =
  {
    name: namein.value,
    email: emailInput.value


  };
  // using this we can add only one user and when we add new user older will removed
  //  localStorage.setItem('userdetails',JSON.stringify(userdetails));

  // using uniqe id we can add multiple user older will nt removed
  localStorage.setItem(userdetails.email, JSON.stringify(userdetails));

  ShowUser(userdetails);
}

// show user on screen
window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localstoragekey = Object.keys(localStorageObj)

  for (var i = 0; i < localstoragekey.length; i++) {
    const key = localstoragekey[i]
    const userString = localStorageObj[key];
    const userObj = JSON.parse(userString);
    ShowUser(userObj);
  }
})





function ShowUser(user) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
  userList.appendChild(li);


  // const parentnode=document.getElementById('users');
  // const childnode=`<li>${user.name}:${user.email}</li>`
  // parentnode.innerHTML=parentnode.innerHTML + childnode;
  // Clear fields
  namein.value = '';
  emailInput.value = '';

}


