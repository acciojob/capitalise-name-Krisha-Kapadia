// Get the input element by its ID
const inputField = document.getElementById("fname");

// Add blur event listener (when user leaves the input field)
inputField.addEventListener("blur", function () {
  // Convert the value to uppercase
  inputField.value = inputField.value.toUpperCase();
});
