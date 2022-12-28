// Select various document elements
let visibility = document.querySelector('.visibility');
let password = document.querySelectorAll('[type="password"]');
let match = document.querySelector('.match');

// Show or hide password entry based on interaction with the toggle button
visibility.addEventListener('click',(event) => {
    if (event.target.innerText === 'Show') {
        event.target.innerText = 'Hide';
        password.forEach(element => {
            element.setAttribute('type','text');
        });
    } else {
        event.target.innerText = 'Show';
        password.forEach(element => {
            element.setAttribute('type','password');
        });
    }
});

// Verify password entry based on match between both fields and minimum length requirement
addEventListener('keyup',(event) => {
    console.log(password[0].value);
    console.log(password[1].value);
    if (password[0].value === password[1].value && password[0].value.length > 7) {
        match.style.visibility = 'visible';
    } else {
        match.style.visibility = 'hidden';
    }
});