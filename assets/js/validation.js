const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let msgError = " cannot be empty";

function errorFunc(element) {
    element.classList.remove('valid')
    element.classList.add('icon-error');
}

function correctFunc(element) {
    element.classList.remove('icon-error')
    element.classList.add('valid');
}

function validateFirstName() {
    firstName.value.length < 1 ? (errorFunc(firstName),
        document.querySelector('#errorFirstName').textContent = `First Name ${msgError}`)
        : (correctFunc(firstName),
            document.querySelector('#errorFirstName').textContent = "");
}

function validateLastName() {
    lastName.value.length < 1 ? (errorFunc(lastName),
        document.querySelector('#errorLastName').textContent = `Last Name ${msgError}`)
        : (correctFunc(lastName),
            document.querySelector('#errorLastName').textContent = "");
}

function validateEmail() {
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailFormat)) {
        correctFunc(email)
        document.querySelector('#errorEmail').textContent = ""
    } else {
        errorFunc(email)
        document.querySelector('#errorEmail').textContent = `You must enter a valid email address`
    }
}

function validatePassword() {
    password.value.length < 8 || password.value.length > 30 ? (errorFunc(password),
        document.querySelector('#errorPassword').textContent = `
    Your password must be between 8 and 30 characters`)
        : (correctFunc(password),
            document.querySelector('#errorPassword').textContent = "");
}

function validateForm() {
    form.addEventListener('click', (error) => {
        error.preventDefault();
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
    })
};