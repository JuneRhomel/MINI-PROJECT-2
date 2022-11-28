const email = document.getElementById('email');
const pass = document.getElementById('password');
const login_btn = document.getElementById('login_btn');
const google_btn = document.getElementById('google_btn');
const hiddenP = document.querySelector('.hidden_pass');
const hiddenE = document.querySelector('.hidden_email');

login_btn.addEventListener('click', () => {
    if (pass.value.length <= 8){
        hiddenP.classList.add('active');
        return false
    }
    if (email.value.length <= 6){
        hiddenE.classList.add('active');
        return false
    }
})