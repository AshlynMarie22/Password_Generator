// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  //all code will go here

  //Prompts/Confirms
  var passwordLength = prompt(
    "Between 8-128 characters, how long do you want your password"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8-128");
    return;
  }
  var passwordLC = confirm("Do you want to include lower case letters?");
  var passwordUC = confirm("Do you want to include upper case letters?");
  var passwordNM = confirm("Do you want to include numbers?");
  var passwordSC = confirm("Do you want to include special characters?");

  //Characters:
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var specialCharacter = "`~!@#$%^&*()-_=+[{]};:,<.>?";

  var randNumber = "0123456789";

  var masterCharacters = "";
  var finalPassword = "";

  if (passwordLC === true) {
    masterCharacters = masterCharacters.concat(lowerCase);
  }

  if (passwordUC === true) {
    masterCharacters = masterCharacters.concat(upperCase);
  }

  if (passwordSC === true) {
    masterCharacters = masterCharacters.concat(specialCharacter);
  }

  if (passwordNM === true) {
    masterCharacters = masterCharacters.concat(randNumber);
  }

  for (var i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword.concat(
      masterCharacters[Math.floor(Math.random() * masterCharacters.length)]
    );
  }
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
