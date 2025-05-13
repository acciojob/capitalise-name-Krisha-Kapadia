function convertToUpper() {
  const input = document.getElementById("fname").value;
  const upperCaseName = input.toUpperCase();
  alert("Uppercase: " + upperCaseName);
  document.getElementById("result").textContent = "Uppercase: " + upperCaseName;
}
