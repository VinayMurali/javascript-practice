// console.log('GANAPATHI');

// Reverse a String:
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}

const inputStr = 'Hello, World!';
const reversedStr = reverseString(inputStr);
console.log(reversedStr);

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
