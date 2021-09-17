// Asking too many questions is better than too few

// Establish what your input and output is supposed to be
// ** Input = String
// ** Output = boolean

// Find edge cases
// ** Space between words of a string
// ** Case sensitive

// Write out requirements
// ** Input needs to be a string
// ** Identify if the string palindrome

// Breakdown the problem
// ** Create function named isPalindrome
// ** Conditions
// ** If argument is a string then; if false return false
// ** If original string = reversed string then return palindrome; if false return false
// ** Edge case remove spaces (important to implement before reverse)
// ** Edge case remove case (important to implement before reverse)

// Pseudocode

// ** Declare function and pass through argument
// ** If argument is a string then; if false return false
// ** Edge case remove spaces (important to implement before reverse)
// ** Edge case remove case (important to implement before reverse)
// ** If original string = reversed string then return TRUE palindrome; if false return false

// Question 5

// Write a function that determines if a string in a palindrome.
// A palindrome is a string that is the same forward and backwards.

function isPalindrome(phrase) {
  if (phrase === "string" && phrase.reverse === phrase) {
    console.log("You have a palindrome!");
  } else {
    console.log("You have a dud..!");
  }
  // console.log(isPalindrome)
}

isPalindrome("racecar");

// Examples:
// isPalindrome('racecar') // --> true

// isPalindrome('table') // --> false
