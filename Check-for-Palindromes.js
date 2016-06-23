// Check if a string is a palindrome. Case insensitive, ignoring non-alphanumerical characters.

function palindrome(str) {
  
var originalStr = str.toLowerCase().replace(/\W|_/g, ''); // RegEx to strip out non-alphanumerical characters.
var reverseStr = originalStr.split("").reverse().join("");
if (originalStr === reverseStr) {
  return true;
}
else {  
  return false;
}
}
