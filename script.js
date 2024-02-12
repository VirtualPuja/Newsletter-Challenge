//declare variables for submit button and input box for email 
const submitButton = 
const emailInput = document.getElementById("email");


//https://www.shecodes.io/athena/28677-how-to-hide-an-element-until-page-loads
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

function ValidateEmail(email){
//use regex for email validation ---> explanation below
let mail = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/i; 
return mail.test(email);
}

//regex email explanation 
// this ^ (caret) because it means that the RegEx needs to begin with a specific pattern
// [a-zA-Z0-9]+ ---> means that the characters can be uppercase/lowercase, or numbers and there can be one or more matches because of the plus sign
// the string should contain the @ symbol at this point
// [a-z]+ ---> means that the characters can be between a through z and there can be more than one 
// \. ---> the backslash means that the period should be treated as a literal character 
// [a-z]{2,3}$ ---> it should contain two or three aalphabetical characters at the end of the string and the dollar sign means that it has to be at the end of the string
// i is the character that means to ignore the case 

//example https://github.com/Mungai47/Newsletter-Sign-up-Form-with-Success-Message/blob/main/js/script.js
