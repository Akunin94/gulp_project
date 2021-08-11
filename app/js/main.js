document.addEventListener('DOMContentLoaded', function() {
    let loader = document.getElementById('loader');
    loader.classList.add('isHide');
});

const form = document.querySelector('.universallogin-page-form');
const forgotPasswordButton = document.querySelector('.form__forgot-password-button');
const cancelForgotCancelButton = document.querySelector('.cancelForgot-button');
const getNewAccountButton = document.querySelector('.form__get-account-button');
const showLoginButton = document.querySelector('.universallogin-page-form__disablenotif');

forgotPasswordButton.addEventListener('click', event => {
    form.classList.add('form--forgotpass');
    form.classList.remove('form--showlogin', 'form--newaccount');
});
getNewAccountButton.addEventListener('click', event => {
    form.classList.add('form--newaccount');
    form.classList.remove('form--showlogin', 'form--forgotpass');
});
showLoginButton.addEventListener('click', showLoginForm);
cancelForgotCancelButton.addEventListener('click', showLoginForm);

function showLoginForm() {
    form.classList.add('form--showlogin');
    form.classList.remove('form--forgotpass', 'form--newaccount');
}