const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const errorMsgFirstName = document.querySelector('.error-first-name');
const errorMsgLastName = document.querySelector('.error-last-name');
const errorMsgEmail = document.querySelector('.error-email');
const errorMsgPassword = document.querySelector('.error-password');

const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

inputFirstName.addEventListener('focusout', (e) => {

    if(e.target.value.length < 1) {

        inputFirstName.style.border = "2px solid hsl(0, 100%, 74%)";
        errorMsgFirstName.classList.add('active');

    } else {

        inputFirstName.style.border = "1px solid rgb(175, 175, 175)";
        errorMsgFirstName.classList.remove('active');
    }
});


inputLastName.addEventListener('focusout', (e) => {

    if(e.target.value.length < 1) {

        inputLastName.style.border = "2px solid hsl(0, 100%, 74%)";
        errorMsgLastName.classList.add('active');

    } else {

        inputLastName.style.border = "1px solid rgb(175, 175, 175)";
        errorMsgLastName.classList.remove('active');
    }
});

inputEmail.addEventListener('focusout', (e) => {

    if(!regexEmail.test(e.target.value)) {

        inputEmail.style.border = "2px solid hsl(0, 100%, 74%)";
        inputEmail.style.color = "hsl(0, 100%, 74%)";
        errorMsgEmail.classList.add('active');

    } else {
        inputEmail.style.border = "1px solid rgb(175, 175, 175)";
        inputEmail.style.color = "#333";
        errorMsgEmail.classList.remove('active');
    }
});


inputPassword.addEventListener('focusout', (e) => {

    if(e.target.value.length < 1) {

        inputPassword.style.border = "2px solid hsl(0, 100%, 74%)";
        errorMsgPassword.classList.add('active');

    } else {

        inputPassword.style.border = "1px solid rgb(175, 175, 175)";
        errorMsgPassword.classList.remove('active');
    }
});