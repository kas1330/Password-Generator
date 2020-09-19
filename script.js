//1. Create a frunction containing a series of prompts (THEN I am presented with a series of prompts for password criteria)
      //a. prompts must be for password length 8-128chr, uppercase,
      //lowercase, numeric and special chars
//2. At least one char type should be selected
//3. All prompt answer should be stored in an object
//4. Create a new array of all chars chosen.
//5. Select random chars from that array for however long the
    //password should be
//6. Password is now generated.
//7. Return password to the user. (alert or written to page)


//  //Assignment Code
// var generateBtn = document.querySelector("#generate");

//password object
var password = {
  length: '',
  upper:  '',
  lower: '',
  num: '',
  spec: ''
}

password.length = prompt('How long would you like your password to be?');
console.log('Length is: ', password.length);

password.upper = prompt('Would you like uppercase letters in your password? (Press "ok" for yes)');
console.log('Uppercase?: ', password.upper);

password.lower = prompt('Would you like lowercase letters in your password? (Press "ok" for yes)');
console.log('Lowercase?: ', password.lower);

password.num = prompt('Would you like numerical values in your password? (Press "ok" for yes)');
console.log('Numerical?: ', password.num);

password.spec = prompt('Would you like special characters in your password? (Press "ok" for yes)');
console.log('Special?: ', password.spec);



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
