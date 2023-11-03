let inputElements = document.querySelectorAll('.inputs');
let btn = document.getElementById('save');

btn.addEventListener('click', function () {
    let allInputsFilled = true;
    let username = document.getElementById ('username');
    let name = document.getElementById ('name');
    let surname = document.getElementById ('surname');
    let age = document.getElementById ('age');
    let gender = document.getElementById ('gender');
    let password = document.getElementById ('password');
    for (let input of inputElements) {
        if (!input.value) {
            allInputsFilled = false;
            break;
        }
    }

    if (allInputsFilled) {
        let User = {username,name,surname,age,gender,password};
        localStorage.setItem (username , JSON.stringify(User))
    } else {
        alert("Toliq royxatni to'ldiring");
    }
});
