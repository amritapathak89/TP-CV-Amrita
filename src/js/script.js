const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('submit', validateEmail);
const inputEmail = document.querySelector('#exampleInputEmail1');
const passwordInput = document.querySelector('#exampleInputPassword1');
const emailErrorMsg = document.querySelector("#emailHelp");

function validateEmail(inputEmail, passwordInput) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value.match(validRegex)) {
    console.log('correct email');
    emailErrorMsg.innerHTML = "Valid email address";
  } else {
    emailErrorMsg.innerHTML = "Invalid email address!";
  }
  
}