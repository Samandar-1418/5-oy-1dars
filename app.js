const username = document.getElementById ('username');
const name = document.getElementById ('name');
const surname = document.getElementById ('surname');
const age = document.getElementById ('age');
const gender = document.getElementById ('gender');
const password = document.getElementById ('password');
const repassword = document.getElementById ('repassword');
const lang = document.querySelectorAll ('input.language');
const btn = document.getElementById ('save')

function validate() {
    if (!username.value){
        username.style.outlineColor = 'red';
        username.focus ();
        return
    }
    if (!name.value){
        name.style.outlineColor = 'red';
        name.focus ();
        return
    }
    if (!password.value){
        password.style.outlineColor = 'red';
        password.focus ();
        return
    }
    if (!age.value){
        name.style.outlineColor = 'red';
        name.focus ();
        return
    }
    if (password.value != repassword.value){
        alert ('parollar bir xil kiritilmadi..');
        password.value =  '';
        repassword.value = '';
    }
}
function clearvalue (){
    username.value = '';
    name.value = '';
    surname.value = '';
    age.value = '';
    password.value = '';
    repassword.value = '';
    lang.forEach(el => {
        el.checked = false;    
    });
}
function createobjectuser(){
    let user = {};
    user.username = username.value;
    user.name = name.value;
    user.surname = surname.value;
    user.age = age.value;
    user.gender = gender.value;
    user.password = password.value;
    user.lang = [];
   lang.forEach(el => {
       if (el.checked){
           user.lang.push(el.value);
       }
   });
   let data = localStorage.getItem ( 'users') ? JSON.parse ( localStorage.getItem ('users')): [];
   if (data.length){
    data.forEach(el => {
        if (el.username == user.username){
         alert ('bunday foydalanuvchi mavjud');
         username = '';
         username.focus ()
         username.style.outlineColor = 'red'; 
         return   
        }
    });
   }
   data.push (user);
   localStorage.setItem ('users', JSON.stringify(data));

   window.location.href = "http://127.0.0.1:5500/main.html"
}
btn.addEventListener ( 'click', function (){
validate ();
createobjectuser ();
clearvalue ()
 })
 