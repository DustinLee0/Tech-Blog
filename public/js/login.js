const loginBtn = document.getElementById('login-btn');
const createNewUserBtn = document.querySelector('#new-user-btn');
const signUpBtn = document.querySelector('#signUp-btn');

// render sign up form when create account clicked
createNewUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('CREATE USER EVENT LISTENER')

    const loginHeader = document.querySelector('#login-header');
    const buttons = document.querySelector('#buttons');

    loginHeader.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('d-none');

    while (buttons.children) buttons.removeChild(buttons.children[0]);
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('LOGIN BTN EVENT LISTENER')

    let user = document.querySelector('#user');
    let password = document.querySelector('#password');
    console.log('USER: ', user.value);
    console.log('PASSWORD: ', password.value);
});

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('signup btn works');

    let user = document.querySelector('#user');
    let password = document.querySelector('#password');
    console.log('USER: ', user.value);
    console.log('PASSWORD: ', password.value);
})