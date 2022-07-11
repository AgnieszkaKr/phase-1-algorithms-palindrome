function isPalindrome(word) {
  // Write your algorithm here

if (word.length === 1){
  return true
}
if (word.length ===2){
  return word[0]===word[1]
}

let first = word[0]
let last  = word.slice(-1)

if (first !== last){
  return false
}
 let result = isPalindrome(word.slice(1, -1))
 return result
}



/* 
  Add your pseudocode here
function takes a string, 
slice one and last element of the string and compare it,
if first and last is the same takes again last and first
if diffrent return false, 
at the end if 1 letter left return true
last === first
last === first
length === 1
palindrome




*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
