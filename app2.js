window.onload = function() {
    let url = window.location.href;
    console.log(url);
    const username = url.substring(url.indexOf('user=') + 5);
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    if (data.length) {
        data.forEach(el => {
            if (el.username == username) {
                document.getElementById('name').innerHTML = el.name;
                document.getElementById('surname').innerHTML = el.surname;
                document.getElementById('username').innerHTML = el.username;
                document.getElementById('age').innerHTML = el.age;
            }
        });
    } else {
        window.location.href = "http://127.0.0.1:5500/";
    }
}