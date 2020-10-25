// STORING USER VALUES

const firstName = document.querySelector('#first-name').value;
const lastName = document.querySelector('#last-name').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

// OBJECT WITH VALUES FROM REGISTRATION FIELDS
let recordValue = {
    firstName,
    lastName,
    email,
    password
};

let msgError = " cannot be empty";

function validateFill() { // VALIDATING TEXT FIELD AND PRESENTING ERROR MSG
    if (!recordValue.firstName){
        document.getElementById("errorFirstName").innerHTML = "First Name" + msgError;
        document.getElementById("first-name").classList.add("icon-error");
    } else if (!recordValue.lastName){
        document.getElementById("errorLastName").innerHTML = "Last Name" + msgError;
        document.getElementById("last-name").classList.add("icon-error");
    } else if (!recordValue.email){
        document.getElementById("errorEmail").innerHTML = "Looks like this is not an email";
        document.getElementById("email").classList.add("icon-error");
    } else if (!recordValue.password){
        document.getElementById("errorPassword").innerHTML = "Password" + msgError;
        document.getElementById("password").classList.add("icon-error");
    }
}