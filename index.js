// console.log('GANAPATHI');

// ~~~~~~~~~~~~ Reverse a String:
// function reverseString(inputString) {
//   return inputString.split('').reverse().join('');
// }

// const inputStr = 'Hello, World!';
// const reversedStr = reverseString(inputStr);
// console.log(reversedStr);

// ~~~~~~~~~~~~~~ Check for Palindrome:

// const checkForIsPal = (inputString) => {
//   inputString = inputString.toLowerCase();
//   return inputString === inputString.split('').reverse().join('');
// };

// const isPal = checkForIsPal('RaceCar');
// console.log(isPal);

// ~~~ FizzBuzz
// Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz"

// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     const isMultipleOf3 = i % 3 === 0;
//     const isMultipleOf5 = i % 5 === 0;

//     if (isMultipleOf3 && isMultipleOf5) {
//       console.log('FizzBuzz');
//     } else if (isMultipleOf3) {
//       console.log('Fizz');
//     } else if (isMultipleOf5) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// Test the function with n = 15
// fizzBuzz(15);

// ~~~~
// Find the Factorial: Write a function to calculate the factorial of a given number.

// const findFactorial = (num) => {
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * findFactorial(num - 1);
//   }
// };
// const result = findFactorial(3);
// console.log('result', result);

// Write a function that finds the longest word in a given sentence.

// const findLongestWord = (sentence) => {
//   const words = sentence.split(' ');
//   return words.reduce((longestWord, currentWord) => {
//     return currentWord.length > longestWord.length ? currentWord : longestWord;
//   }, '');
// };

// // Test the function
// const sentence = 'The quick brown fox jumped over the lazy dog';
// const longestWord = findLongestWord(sentence);
// console.log(longestWord);
// // Output: "jumped"

// Find the sum of array elements

// const sumOfArr = (arr) => {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// const result = sumOfArr([1, 2, 3, 4, 5, 6, 7]);
// console.log(result);

// using es6

// const sumOfArres6 = (arr) => {
//   return arr.reduce((sum, current) => sum + current, 0);
// };

// const result = sumOfArres6([1, 2, 3, 4, 5, 6, 7]);
// console.log(result);
// Example for Call back
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); // Call the callback function
// }

// // The callback function to be executed after the greeting
// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// // Using the greet function with the sayGoodbye callback
// greet('John', sayGoodbye);
