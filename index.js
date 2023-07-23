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

// Remove duplicate in an array

// const removeDuplicateInArrary = (arr) => {
//   return [...new Set(arr)];
// };

// const removeDuplicateInArrary = (arr) => {
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArray.includes(arr[i])) {
//       uniqueArray.push(arr[i]);
//     }
//   }

//   return uniqueArray;
// };
// const result = removeDuplicateInArrary([1, 2, 2, 1, 3, 3, 4, 5]);
// console.log('sss', result);

// ~~~~~~~prime number
// const isPrime = (number) => {
//   if (number <= 1) {
//     return false;
//   }

//   // Iterate from 2 up to the square root of the number
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false; // Found a factor other than 1 and itself, not prime
//     }
//   }

//   return true; // No factors found, number is prime
// };
// console.log(isPrime(12));
// // Fallen array
// function flattenNestedArray(arr) {
//   return arr.flat();
// }

// Example usage:
// const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
// const flattenedArray = flattenNestedArray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, [3, 4], 5, 6, 7, 8]

// // Example usage:
// console.log(isPrime(7)); // Output: true (7 is a prime number)
// console.log(isPrime(12)); // Output: false (12 is not a prime number)
// console.log(isPrime(1)); // Output: false (1 is not a prime number)

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

// Call Bind and Apply
// let printFullName = function (hometown, state) {
//   console.log(
//     `${this.firstName}${this.lastName}$from ${hometown} and ${state}`
//   );
// };
// const person = {
//   firstName: 'Vinay',
//   lastName: 'Murali',
// };
// printFullName.call(person, 'Bangalore', 'karnataka');

// const person2 = {
//   firstName: 'Ram',
//   lastName: 'Prasad',
// };

// printFullName.apply(person2, ['Bangalore', 'karnataka']);

// let exForBind = printFullName.bind(person, 'Bangalore', 'karnataka');
// console.log('bind', exForBind);
// exForBind();

const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer',
};

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);
console.log(`values: ${values}`);
console.log(`entries: ${entries}`);
for (let i = 0; i < keys.length; i++) {
  const property = keys[i];
  console.log(`${property}: ${person[property]}`);
}
