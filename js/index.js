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
    return false; //
    /*  alert("No blank values allowed");
    return false; */
  } else {
    alert("");
    return true;
  }
}
