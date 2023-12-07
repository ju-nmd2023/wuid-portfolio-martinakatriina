// define contant; button
const buttonelement = document.getElementById("Sbutton");

// Define the variables
function validateForm() {
  var firstName = document.getElementById("firstN");
  var secondName = document.getElementById("SecondN");
  var email = document.getElementById("Email");
  var subject = document.getElementById("Subject");
  var errorMessage = document.getElementById("error-message");
  // if theres no value entered
  if (
    firstName.value.trim() === "" ||
    secondName.value.trim() === "" ||
    email.value.trim() === "" ||
    subject.value.trim() === ""
  ) {
    alert("No blank values allowed");
    return false;
  } else {
    alert("");
    return true;
  }
}

// when button is clicked, then event happens
buttonelement.addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default form submission
  validateForm(); // Call the validateForm function when the button is clicked
});
