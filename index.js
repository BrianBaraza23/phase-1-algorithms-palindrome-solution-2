function isPalindrome(word) {
  // Write your algorithm here
  let palindromeWord = word.split('').reverse().join('')
  return word === palindromeWord  
}

/* 
  Add your pseudocode here

   1) The code defines a function isPalindrome that takes a word as input and checks if it is a palindrome.
   2) It then , through another function reverses the word and stores the reversed word in reversedWord function
   3) It compares the original word with the reversed word. If they are equal, it means the word is a palindrome.
*/
/*
  Add written explanation of your solution here

  The code defines takes a word as input and checks if it is a palindrome. 
  The function starts by reversing the characters of the input word. 
  It accomplishes this by splitting the word into an array of individual characters, 
  reversing the order of the characters in the array, and then joining them back together to form a new string.
  The function then compares the original word with combined word.
   If they are equal, it means the word reads the same forward and backward, so the function returns true.
   This Proves that it is a palindrome.
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
module.exports = isPalindrome;