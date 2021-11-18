// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordlength = parseInt(prompt("Enter password-length"))
  if(passwordlength < 8 || passwordlength > 126 || isNaN(passwordlength)){
    return "Invalid password length entered, please enter a number between 8 and 126"
  }
   
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
