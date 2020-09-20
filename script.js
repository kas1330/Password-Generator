//1. Create a frunction containing a series of prompts (THEN I am presented with a series of prompts for password criteria)
      //a. prompts must be for password length 8-128chr, uppercase,
      //lowercase, numeric and special chars
//2. At least one char type should be selected
//3. All prompt answer should be stored in an object
//4. Create a new String of all chars chosen.
//5. Select random chars from that String for however long the
    //password should be
//6. Password is now generated.
//7. Return password to the user. (alert or written to page)


//  //Assignment Code
// var generateBtn = document.querySelector("#generate");

//password object
var passwordObj = {
  length: '',
  upper:  '',
  lower: '',
  num: '',
  spec: ''
}

//To be filled in later by user answers
var passwordString = '';
console.log('PasswordString = ', passwordString);

//Prompts to the user
passwordObj.length = prompt('How long would you like your password to be? (Must be between 8 and 128 characters)');
console.log('Length is: ', passwordObj.length);
while(passwordObj.length < 8 || passwordObj.length > 128){
  passwordObj.length = prompt('How long would you like your password to be? (Must be between 8 and 128 characters)');
  console.log('Length is: ', passwordObj.length);
}

passwordObj.upper = prompt('Would you like uppercase letters in your password? (Press "ok" for yes)');
console.log('Uppercase?: ', passwordObj.upper);

passwordObj.lower = prompt('Would you like lowercase letters in your password? (Press "ok" for yes)');
console.log('Lowercase?: ', passwordObj.lower);

passwordObj.num = prompt('Would you like numerical values in your password? (Press "ok" for yes)');
console.log('Numerical?: ', passwordObj.num);

passwordObj.spec = prompt('Would you like special characters in your password? (Press "ok" for yes)');
console.log('Special?: ', passwordObj.spec);


//Create a string with all the characters that the user wants.
if(passwordObj.upper != null){
  var upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  passwordString += upperString;
  console.log('Full password string is: ', passwordString);
}

if(passwordObj.lower != null){
  var lowerString = 'abcdefghijklmnopqrstuvwxyz';
  passwordString += lowerString;
  console.log('Full password string is: ', passwordString);
}

if(passwordObj.num != null){
  var numString = '0123456789';
  passwordString += numString;
  console.log('Full password string is: ', passwordString);
}

if(passwordObj.spec != null){
  var specString = '!@#$%^&*()-+=<>';
  passwordString += specString;
  console.log('Full password string is: ', passwordString);
}






// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
