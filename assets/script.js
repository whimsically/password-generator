//Arrays for each type of character
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChars = ['"', " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

//Variables to hold user input
var addLowerCase;
var addUpperCase;
var addNums;
var addSpecChars;
var passLength;

//varaible for generated password
var newPassword;


function generatePassword() {
    //getting password length from user via prompt
    passLength = prompt("Please enter the number of characters in your password, a number from 8 to 128.");

    //checking if passLength received valid number
    passLength = Number(passLength);
    if (passLength >= 8 && passLength <= 128) {

      //Getting booleans for whether or not user would like each type of character
      addLowerCase = confirm("Would you like to add lowercase letters to your password?");
      addUpperCase = confirm("Would you like to add uppercase letters to your password?");
      addNums = confirm("Would you like to add numbers to your password?");
      addSpecChars = confirm("Would you like to add special characters to your password?");

        //checking to be sure at least one type is chosen
        if (!addLowerCase && !addUpperCase && !addNums && !addSpecChars) {
          //return to top of function if nothing is chosen
          alert("Please select at least one character type!");
          generatePassword(); 
        }

    } else {
      //goes back to top of function if input is invalid
      alert("Please enter a valid number between 8 and 128!");
      generatePassword();
    }
  
  //array to store all selected characters in
  var passChars = [];

  //adding each set of characters to new array if selected
  if (addLowerCase) {
    passChars = passChars.concat(lowerCase);
  }
  if (addUpperCase) {
    passChars = passChars.concat(upperCase);
  }

  if (addSpecChars) {
    passChars = passChars.concat(specChars);
  }

  if (addNums) {
    passChars = passChars.concat(nums);
  }

//setting password variable to blank
newPassword = "";

//for loop, selects a random character from passChars array and puts it in newPassword until it reaches desired length
  for (var i = 0; i < passLength; i++) {
    newPassword += passChars[Math.floor(Math.random() * passChars.length)];
  }

  //returns the newly generated password
  return newPassword;
}

// Assignment Code - starter code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - starter code
generateBtn.addEventListener("click", writePassword);