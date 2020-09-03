// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  //all code will go here
  for (var i=0; i< 1; i++) {
  var passwordLength = prompt("Between 8-128 characters, how long do you want your password");
  var passwordLC = confirm ("Do you want to include lower case characters?");
  var passwordUC = confirm ("Do you want to include upper case characters?");
  var passwordNM = confirm ("Do you want to include numbers?");
  var passwordSC = confirm ("Do you want to include special characters?");
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  var specialcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", "|", "~", ",", "?"]
  var randNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var getRandomLowerCase = 
  lowercase[Math.floor(Math.random()*lowercase.length)];

  var getRandomUpperCase = 
  uppercase[Math.floor(Math.random()*uppercase.length)];

  var getRandomSC =
  specialcharacter[Math.floor(Math.random()*specialcharacter.length)];

  var getRandomNM =
  randNumber[Math.floor(Math.random()*randNumber.length)];

  var paswordlengthValue= Number(passwordLength.valueOf);

  const randomFun = {
    lower : getRandomLowerCase,
    upper : getRandomUpperCase,
    number : getRandomNM,
    symbol : getRandomSC
  }
  
  if (passwordLC && passwordLC && passwordNM && passwordSC){
    for (i=0; i< passwordLengthValue; i++){
    

  }

  if (passwordUC){
    console.log(passwordLength)

  }

}
  }}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);