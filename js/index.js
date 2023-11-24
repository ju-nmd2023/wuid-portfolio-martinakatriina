/* function validateForm() {
  var firstName = document.getElementById("firstN");
  var secondName = document.getElementById("SecondN");
  var email = document.getElementById("Email");
  var subject = document.getElementById("Subject");
  var errorMessage = document.getElementById("error-message");

  if (
    firstName.value.trim() === "" ||
    secondName.value.trim() === "" ||
    email.value.trim() === "" ||
    subject.value.trim() === ""
  ) {
    alert("No blank values allowed");
    return false; //
    /*  alert("No blank values allowed");
    return false; */
/* } else {
    alert("");
    return true;
  }
} */

// Retrieve the button element
const buttonelement = document.getElementById("button");

// Define the validateForm function separately
function validateForm() {
  var firstName = document.getElementById("firstN");
  var secondName = document.getElementById("SecondN");
  var email = document.getElementById("Email");
  var subject = document.getElementById("Subject");
  var errorMessage = document.getElementById("error-message");

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

// Add event listener to the button
buttonelement.addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default form submission
  validateForm(); // Call the validateForm function when the button is clicked
});
