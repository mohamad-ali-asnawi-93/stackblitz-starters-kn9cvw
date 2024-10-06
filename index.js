// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

const userName = prompt("Enter name: ")
const userAge = prompt("Enter age: ")
const favoriteColor = prompt("Enter favorite color: ")

console.log(`Hello ${userName}, you are ${userAge} years old and your favorite color is ${favoriteColor}`)