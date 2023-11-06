const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('save');

function validate() {
    if (!username.value) {
        username.style.outlineColor = 'red';
        username.focus();
        return;
    }

    if (!password.value) {
        password.style.outlineColor = 'red';
        password.focus();
        return;
    }
}

btn.addEventListener('click', function() {
    validate();
    let exit = false;

    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    if (data.length) {
        data.forEach(user => {
            if (user.name == username.value && user.password == password.value) {
                exit = true;
                window.location.href = "http://127.0.0.1:5500/kabanet.html";
                return;
            }
        });
    }
    if (!exit) {
        alert('Parol yoki foydalanuvchi nomi xato');
        password.value = ""; 
    }
});