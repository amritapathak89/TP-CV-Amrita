const submitForm = document.querySelector('#form');
submitForm.addEventListener("submit", validateEmail);
const inputEmail = document.querySelector('#email');
const emailMsg = document.querySelector("#display-emailMsg");
const msgBox = document.querySelector("#msgBox");

function validateEmail(e) {
  e.preventDefault();
  let msgInput = msgBox.value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value.match(validRegex)) {
    console.log('correct email');
    emailMsg.innerHTML = "Valid email address";
    return true;
  }
  else {
    emailMsg.innerHTML = "Invalid email address!";
    console.log('incorrect email');
    return false;
  }

}

