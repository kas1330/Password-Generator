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


  //Assignment Code
var generateBtn = document.querySelector("#generate");

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
// console.log('PasswordString = ', passwordString);



//Use regular expression to determine if there is a non numeric char in this user answer.
var isANum = /^[0-9]+$/;
var valueCheck = passwordObj.length;
var res = valueCheck.match(isANum);
// console.log("The result is: ", res);


//Create a string with all the characters that the user wants.
if(passwordObj.upper != null){
  var upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  passwordString += upperString;
  // console.log('Full password string is: ', passwordString);
}

if(passwordObj.lower != null){
  var lowerString = 'abcdefghijklmnopqrstuvwxyz';
  passwordString += lowerString;
  // console.log('Full password string is: ', passwordString);
}

if(passwordObj.num != null){
  var numString = '0123456789';
  passwordString += numString;
  // console.log('Full password string is: ', passwordString);
}

if(passwordObj.spec != null){
  var specString = '!@#$%^&*()-+=<>';
  passwordString += specString;
  // console.log('Full password string is: ', passwordString);
}

function generatePassword(){

  while(passwordObj.length < 8 || passwordObj.length > 128 || res === null){
    passwordObj.length = prompt('How long would you like your password to be? (Must be between 8 and 128 characters)');
    // console.log('Length is: ', passwordObj.length);
    if(passwordObj.length >= 8 || passwordObj.length <=128){
      //This just makes res equal to something that is not null.
      res = 1;
    }
  }

  passwordObj.upper = prompt('Would you like uppercase letters in your password? (Press "ok" for yes)');
  // console.log('Uppercase?: ', passwordObj.upper);
  
  passwordObj.lower = prompt('Would you like lowercase letters in your password? (Press "ok" for yes)');
  // console.log('Lowercase?: ', passwordObj.lower);
  
  passwordObj.num = prompt('Would you like numerical values in your password? (Press "ok" for yes)');
  // console.log('Numerical?: ', passwordObj.num);
  
  passwordObj.spec = prompt('Would you like special characters in your password? (Press "ok" for yes)');
  // console.log('Special?: ', passwordObj.spec);
  
  var passLength = parseInt(passwordObj.length);
  // console.log('Passlength ', passLength);
  var pass = '';
  for (var i = 0; i < passLength; i++) {
    var rand = Math.floor(Math.random() * passwordString.length + 1); 
    // console.log('Random password: ', rand);
    pass += passwordString.charAt(rand);
    // console.log('Random password: ', pass);
  }
  return pass;
 }


 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var passwordObj = {
    length: '',
    upper:  '',
    lower: '',
    num: '',
    spec: ''
  }
  
  res = null;
}

// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
