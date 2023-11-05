const username = document.getElementById ('username');
const name = document.getElementById ('name');
const surname = document.getElementById ('surname');
const age = document.getElementById ('age');
const gender = document.getElementById ('gender');
const password = document.getElementById ('password');
const repassword = document.getElementById ('repassword');
const lang = document.querySelectorAll ('input.language');
const btn = document.getElementById ('save');

function validate() {
    if (!username.value){
        username.style.outlineColor = 'red';
        username.fokus ();
        return
    }
    if (!name.value){
        name.style.outlineColor = 'red';
        name.fokus ();
        return
    }
    if (!password.value){
        password.style.outlineColor = 'red';
        password.fokus ();
        return
    }
    if (!name.value){
        name.style.outlineColor = 'red';
        name.fokus ();
        return
    }
    if (password.value != repassword.value){
        alert ('parollar bir xil kiritilmadi..');
        password.value =  '';
        repassword.value = '';
    }
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
         username.style.outlineColor = 'red';   
        }
        
    });
   }
}
btn.addEventListener ( 'click', function (){
validate ();
createobjectuser ();
console.log(user);  
 })
