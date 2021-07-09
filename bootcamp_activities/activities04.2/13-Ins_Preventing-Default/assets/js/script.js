var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(e) {
  // Prevent default action
  e.preventDefault();

  console.log(e);
  alert("Thanks " + nameInput.value + "!");

  //var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  //submissionResponseEl.textContent = response;
}

// Add listener to submit element
submitEl.addEventListener("click", showResponse);
